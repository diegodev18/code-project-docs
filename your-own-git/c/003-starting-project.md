---
id: 'starting-project'
title: 'Iniciando el proyecto'
description: 'Crea un nuevo repositorio Git vacío.'
---

# Iniciando el proyecto

Para comenzar, copia el siguiente código en un archivo llamado `main.c`:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

> Asi es como se ve un programa en C que imprime "Hello, World!" en la consola.

## Compilando el programa

Para compilar en **Linux** el programa, ejecuta el siguiente comando:

```bash
gcc main.c -o main
```

O en **Windows**:

```Powershell
gcc main.c -o main.exe
```

## Ejecutando el programa

Para ejecutar el programa en **Linux**, escribe:

```bash
./main
```

O en **Windows**:

```bash
main.exe
```
