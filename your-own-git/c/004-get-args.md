---
num: 4
id: 'get-args'
title: 'Obteniendo argumentos'
description: 'Obtén los argumentos de la línea de comandos.'
---

# Obtener argumentos

Para que nuestro programa pueda recibir argumentos de la línea de comandos, necesitamos modificar la función `main` para que acepte los argumentos `argc` y `argv`. Estos argumentos nos permitirán acceder a los valores que el usuario proporciona al ejecutar nuestro programa.

## Explorando los argumentos

- `argc`: Es un entero que representa el número de argumentos pasados al programa.
- `argv`: Es un arreglo de cadenas de caracteres que contiene los argumentos pasados al programa.

## Mas sobre los argumentos

- El primer argumento en el arreglo `argv` es el nombre del programa.
- `argc` siempre será al menos 1, ya que el primer argumento es el nombre del programa.
- Los argumentos adicionales se almacenan en las posiciones siguientes del arreglo `argv`.
- Los argumentos se separan por espacios en la línea de comandos.

> Recuerda que los argumentos que recibira su plataforma ayudaran a que el usuario pueda definir cual es la accion que desea realizar con su programa.

## Tu turno

- [ ] Modifica la función `main` para que acepte los argumentos `argc` y `argv`.
- [ ] Imprime los argumentos recibidos por el programa **Asi podras testear tu programa**.