---
id: 'init-command'
title: 'Implementando el comando init'
description: 'Crea un nuevo repositorio Git vacío.'
---

# Comando `init`

El comando `init` se utiliza para crear un nuevo repositorio Git vacío. Para inicializar un nuevo repositorio, navega al directorio raíz de tu proyecto y ejecuta el siguiente comando:

```bash
git init
```

Este comando creará un nuevo directorio oculto llamado `.git` en tu proyecto, que contiene todos los archivos necesarios para el control de versiones. A partir de este momento, tu proyecto estará bajo control de Git y podrás comenzar a realizar cambios, confirmaciones y otras operaciones de control de versiones.

## Directorio `.git`

El directorio `.git` contiene todos los archivos necesarios para el control de versiones de tu proyecto. A continuación, se muestra una lista de los archivos y directorios más importantes que se encuentran en el directorio `.git`:

- `branches`: Almacena información sobre las ramas del repositorio.
- `COMMIT_EDITMSG`: Archivo temporal que contiene el mensaje de confirmación.
- `config`: Archivo de configuración del repositorio.
- `description`: Archivo que contiene la descripción del repositorio.
- `FETCH_HEAD`: Archivo que almacena información sobre las ramas remotas.
- `HEAD`: Archivo que apunta a la rama actual.
- `hooks`: Directorio que contiene los ganchos del repositorio.
- `index`: Archivo que almacena el índice del repositorio.
- `info`: Directorio que contiene información adicional sobre el repositorio.
- `logs`: Directorio que contiene los registros del repositorio.
- `objects`: Directorio que contiene los objetos del repositorio.
- `ORIG_HEAD`: Archivo que almacena la referencia a la rama anterior.
- `packed-refs`: Archivo que almacena las referencias del repositorio.
- `refs`: Directorio que contiene las referencias del repositorio.

## Sintaxis

La sintaxis básica del comando `init` es la siguiente:

```bash
git init
```

En este caso, `git` es el comando de Git **pero en tu programa, se remplazara por tu programa**, y `init` es el subcomando que se utiliza para inicializar un nuevo repositorio. No se requieren argumentos adicionales para este comando.

### Ejecutando tu programa

Para ejecutar tu programa, simplemente navega al directorio raíz de tu proyecto y ejecuta el siguiente comando:

```bash
./tu-programa-compilado init
```

## Tu turno

- [ ] Haz que tu programa cree el directorio `.git` en tu proyecto, al recibir `init` como argumento.