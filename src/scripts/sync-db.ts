import type { Project, Locale, Stack, Phase, Entry } from "../types/sync-db";

import fs from "fs";
import path from "path";
import axios, { AxiosError } from "axios";

const { API_URL, API_SECRET_KEY } = process.env;
const DOCS_DIR = path.resolve(__dirname, "../../docs");

const main = async () => {
  if (!API_URL || !API_SECRET_KEY) {
    console.error("API_URL or API_SECRET_KEY not found");
    return;
  }

  console.log("Syncing database...");
  const payload = scanProject(DOCS_DIR);

  if (payload.length === 0) {
    console.error("No projects found");
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/docs/sync`, payload, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_SECRET_KEY,
      },
    });
    if (response.status !== 200) {
      console.error("Error syncing database");
      return;
    }

    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database");
  }
};

const scanProject = (dir: string) => {
  let results: Entry[] = [];
  if (!fs.existsSync(dir)) {
    return results;
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryObj: Entry = { data: {} as Project, project: [] };
    const fullPath = path.join(dir, entry.name);

    if (!entry.isDirectory()) continue;

    try {
      const projectJsonPath = path.join(fullPath, "project.json");
      if (!fs.existsSync(projectJsonPath)) continue;

      const projectJson = fs.readFileSync(projectJsonPath, "utf-8");
      const project = JSON.parse(projectJson) as Project;

      entryObj.data = project;
    } catch (error) {
      console.error(`Error reading project.json for ${entry.name}:`, error);
      continue;
    }

    const localeEntries = fs.readdirSync(fullPath, { withFileTypes: true });
    for (const localeEntry of localeEntries) {
      if (!localeEntry.isDirectory()) continue;

      const localeObj: Entry["project"][number] = {
        locale: {
          data: {} as Locale,
          project: [],
        },
      };

      try {
        const localeJsonPath = path.join(
          fullPath,
          localeEntry.name,
          "locale.json"
        );
        const localeJson = fs.readFileSync(localeJsonPath, "utf-8");
        const locale = JSON.parse(localeJson) as Locale;
        localeObj.locale.data = { ...locale, slug: localeEntry.name };

        const stackEntries = fs.readdirSync(
          path.join(fullPath, localeEntry.name),
          { withFileTypes: true }
        );
        for (const stackEntry of stackEntries) {
          if (!stackEntry.isDirectory()) continue;

          const stackObj: Entry["project"][number]["locale"]["project"][number] =
            {
              stack: {
                data: {} as Stack,
                phases: [],
              },
            };

          try {
            const stackJsonPath = path.join(
              fullPath,
              localeEntry.name,
              stackEntry.name,
              "stack.json"
            );
            const stackJson = fs.readFileSync(stackJsonPath, "utf-8");
            const stack = JSON.parse(stackJson) as Stack;
            stackObj.stack.data = { ...stack, slug: stackEntry.name };

            const phaseEntries = fs.readdirSync(
              path.join(fullPath, localeEntry.name, stackEntry.name),
              { withFileTypes: true }
            );
            for (const phaseEntry of phaseEntries) {
              if (!phaseEntry.isDirectory()) continue;
              try {
                const phaseJsonPath = path.join(
                  fullPath,
                  localeEntry.name,
                  stackEntry.name,
                  phaseEntry.name,
                  "phase.json"
                );
                const phaseJson = fs.readFileSync(phaseJsonPath, "utf-8");
                const phase = JSON.parse(phaseJson) as Phase;

                const stepEntries = phase.steps;
                for (let j = 0; j < stepEntries.length; j++) {
                  const stepEntry = stepEntries[j];
                  const stepFileName = stepEntry.file;
                  const stepPath = path.join(
                    fullPath,
                    localeEntry.name,
                    stackEntry.name,
                    phaseEntry.name,
                    stepFileName
                  );
                  if (!fs.existsSync(stepPath)) continue;

                  const stepContent = fs.readFileSync(stepPath, "utf-8");
                  phase.steps[j].content = stepContent;
                }

                stackObj.stack.phases.push(phase);
              } catch (error) {
                console.error(
                  `Error reading phase.json for ${entry.name}:`,
                  error
                );
                continue;
              }
            }

            localeObj.locale.project.push(stackObj);
          } catch (error) {
            console.error(`Error reading stack.json for ${entry.name}:`, error);
            continue;
          }
        }

        entryObj.project.push(localeObj);
      } catch (error) {
        console.error(`Error reading locale.json for ${entry.name}:`, error);
        continue;
      }
    }

    results.push(entryObj);
  }

  return results;
};

main();
