---
id: 'estructura-de-datos'
title: 'Estructuras de Datos Básicas'
description: 'Descripción de las estructuras de datos utilizadas en el analizador automata.'
---

> En este módulo definiremos los tipos y estructuras fundamentales.

# Definición de estructuras

Una estructura es una colección de variables de diferentes tipos que se agrupan bajo un solo nombre.

## Ejemplo de estructuras

```c
typedef struct {
  char *lista;  // Array dinámico de estados o símbolos.
  int tam;      // Número de elementos.
} LISTACHAR;  // Nombre de la estructura
```

Esta estructura se utiliza para almacenar una lista de caracteres.

## Explicación de estructuras

- **LISTACHAR**: almacenará una lista de carácteres.
- **LISTAINT**: almacenará una lista de enteros (esto lo podrías modificar para utilizar unsigned int)
- **LISTAFUNCIONES**: almacenará las funciones de transición
- **FUNCION**: almacenará una función de transición
- **AUTOMATA**: Toda la información que necesita un automata según su definición.

## Ahora, crea tus propias estructuras

### LISTACHAR

Esta estructura deberá tener:
- Un **array de caracteres (`char`) dinámico**. Deberá ser un puntero de caracteres para almacenar los valores de la lista, con un tamaño dinámico.
- El **tamaño del array** que se almacena en la misma estructura.

### LISTAINT

Esta estructura deberá tener:
- Un **array de enteros (`int`) dinámico**. Deberá ser un puntero de enteros para almacenar los valores de la lista, con un tamaño dinámico.
- El **tamaño del array** que se almacena en la misma estructura.

### FUNCION

Esta estructura deberá tener:
- Un carácter (`char`) que representa el **estado de origen**.
- Un carácter (`char`) que representa el **símbolo que se consume**.
- Un carácter (`char`) que representa el **estado de destino**.

### LISTAFUNCIONES

Esta estructura deberá tener:
- Un **array de funciones (`void*`) dinámico**. Deberá ser un puntero del tipo que se creo anteriormente `FUNCION` para almacenar las funciones de transición, con un tamaño dinámico.
- El tamaño del array que se almacena en la misma estructura.

### AUTOMATA

Esta estructura deberá tener:
- Un dato de tipo `LISTAINT` que representa el conjunto de estados del automata.
- Un dato de tipo `LISTACHAR` que representa el alfabeto del automata.
- Un dato de tipo `LISTAFUNCIONES` que representa las funciones de transición del automata.
- Un dato de tipo `char` que representa el estado de inicio del automata.
- Un dato de tipo `LISTACHAR` que representa el estado final del automata.

[Revisa la definición de un ATF.](https://i.ibb.co/hxsxSPnh/image.png)
