---
id: 'cargar-automata'
title: 'Cargar autómata.'
description: 'Configuraremos los archivos necesarios y un par de tips para echar a andar a nuestro analizador de cadenas en AFD.'
---
Este módulo está diseñado para ayudarte a pensar en cómo podrías implementar la lógica para cargar un autómata a partir de archivos de texto. En lugar de darte la implementación completa, te daremos una guía paso a paso, recomendaciones y algunos fragmentos clave. ¡Tú te encargarás del resto!

---

## 🎯 Objetivo

Implementar una función `cargarAutomata(char *ruta)` que lea archivos de texto y construya un autómata con la información cargada.

## 🧠 Qué debes pensar

1. **¿Qué estructura tiene el autómata?**
   - Piensa en cómo vas a representar los **estados**, **alfabeto**, **estado inicial**, **estados finales** y las **funciones de transición**.
   - ¿Qué estructuras de datos usarás para almacenarlos?

2. **¿Cómo vas a leer cada archivo?**
   - Usa `fopen`, `fscanf` y `fclose` para abrir, leer y cerrar los archivos.
   - ¿Qué precauciones debes tomar al abrir archivos? ¿Qué errores debes manejar?

3. **Formato de los archivos:**
   - `estados.txt`: caracteres individuales por estado.
   - `alfabeto.txt`: caracteres individuales por símbolo.
   - `estadosFinales.txt`: caracteres individuales.
   - `estadoInicial.txt`: un solo carácter.
   - `funciones.txt`: líneas del tipo `q a r` donde `q` es el estado actual, `a` el símbolo, y `r` el estado resultado.

## 📁 Archivos esperados

Asegúrate de que la carpeta pasada a la función contenga los archivos necesarios como:
`estados.txt`, `alfabeto.txt`, `estadosFinales.txt`, `estadoInicial.txt` y `funciones.txt`


## 🔧 Sugerencias para la implementación

- Puedes usar `strcat` y `strcpy` para construir rutas completas a los archivos.
- No olvides reservar memoria si vas a usar arreglos de caracteres dinámicos (`calloc`, `malloc`).
- Asegúrate de limpiar los saltos de línea `\\n` y otros caracteres no deseados al leer con `fscanf`.

## 🧩 Fragmento de guía

Aquí tienes un ejemplo de cómo podrías abrir un archivo y leer caracteres, filtrando saltos de línea:

```c
FILE *archivo = fopen("ruta/estados.txt", "r");
if (archivo == NULL) {
    perror("No se pudo abrir el archivo");
    exit(EXIT_FAILURE);
}
char c;
while (fscanf(archivo, "%c", &c) != EOF) {
    if (c != '\\n') {
        // Aquí va tu lógica para agregar el estado al autómata
    }
}
fclose(archivo);
```

## 🚨 Consideraciones
- Verifica que los archivos se abren correctamente. Usa perror para mostrar errores si algo falla.
- Evita repetir código. ¿Puedes crear una función para leer listas de caracteres?
- Considera liberar memoria si tu implementación lo requiere.

## 🧪 ¿Cómo probarlo?
Una vez implementado, crea un conjunto de archivos con datos de ejemplo y llama a `cargarAutomata("ruta")`. Asegúrate de que el autómata tenga todos los elementos correctamente cargados.

> Recordatorio: ¡Este es tu reto! Ponte creativo, organiza bien tu código, y piensa cómo lo modularizarías si tuvieras que escalarlo.