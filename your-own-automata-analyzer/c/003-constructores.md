---
id: 'constructores'
title: 'Constructores'
description: 'Inicializar las estructuras de datos de los ATF'
---

En este módulo inicializaremos las estructuras de datos y sus variables para que cuando queramos crear un ATF tenga memoria reservada y ciertos valores iniciales.

# ¿Por qué se tiene que inicializar?

Es una buena pregunta. En realidad, debemos inicializar las variables ya que **esto hace que el código sea más limpio al momento de querer crear un nuevo ATF**.

Imaginate tener que inicializar todos los valores de un ATF cada que quieras crearlo, ¿da un poco de flojera pensar en eso, no?

Pues bien, ese es uno de los motivos. Para quienes hayan trabajado con la Programación Orientada a Objetos se les hará algo similar a los que es el constructor de un objeto. Si bien el lenguaje C no soporta esta caracteristica al ser un lenguaje del paradigma estructurado, podemos utilizar esta estrategia para evitar problemas en memoria y ahorrar código.

**A continuacion crearemos las funciones que nos permitirán crear las estructuras de datos necesarias para el ATF...**

> Recordatorio: Recuerda que debes usar los tipos de datos adecuados para cada estructura.

## crearAutomata()

Esta funcion nos permitirá crear un nuevo ATF con los valores iniciales.

```c
AUTOMATA crearAutomata() {
	// Creamos la estructura del tipo AUTOMATA.
	// Creamos la lista de caracteres del alfabeto sin elementos.
	// Seteamos el tamaño de la lista de caracteres del alfabeto a 0.
	// Seteamos el estado inicial a un caracter nulo '\0'.
	// Creamos la lista de estados sin elementos.
	// Seteamos el tamaño de la lista de estados a 0.
	// Creamos la lista de estados finales sin elementos.
	// Seteamos el tamaño de la lista de estados finales a 0.
	// Seteamos el tamaño de la lista de funciones a 0.
	// Seteamos la funcion de transicion a NULL.
	// Retornamos la estructura inicializada del tipo AUTOMATA.
}
```

## crearListaChar()

Esta funcion nos permitirá crear una nueva lista de caracteres con los valores iniciales.

```c
LISTACHAR crearListaChar(int n) { // Deberiamos recibir el tamaño de la lista de caracteres del alfabeto.
	// Creamos la lista de caracteres del alfabeto (Tipo LISTACHAR).
	// Creamos la lista de elementos con el tamaño del argumento `n`. Recomendable usar calloc para inicializar la memoria.
	// Seteamos el tamaño de la lista de caracteres del alfabeto a `n`.
	// Retornamos la lista de caracteres del alfabeto.
}
```

## crearListaInt()

Esta funcion nos permitirá crear una nueva lista de enteros con los valores iniciales.

```c
LISTAINT crearListaInt(int n) {
	// Creamos la lista de enteros del alfabeto (Tipo LISTAINT).
	// Creamos la lista de elementos con el tamaño del argumento `n`. Recomendable usar calloc para inicializar la memoria.
	// Seteamos el tamaño de la lista de enteros del alfabeto a `n`.
	// Retornamos la lista de enteros del alfabeto.
}
```

## crearFuncion()

Esta funcion nos permitirá crear una nueva funcion con los valores iniciales.

```c
FUNCION crearFuncion(char estado, char simbolo, char estadoFinal) {
	// Creamos la estructura de la FUNCION.
	// Seteamos el estado de la funcion, con el valor del argumento `estado`.
	// Seteamos el simbolo de la funcion, con el valor del argumento `simbolo`.
	// Seteamos el resultado de la funcion, con el valor del argumento `estadoFinal`.
	// Retornamos la funcion.
}
```

## crearListaFunciones()

```c
LISTAFUNCIONES crearListaFunciones(int n){
	// Creamos la lista de funciones del automata (Tipo LISTAFUNCIONES).
	// Creamos el arreglo de funciones del automata (Tipo FUNCION), de manera dinamica con el tamaño del argumento `n` y usamos la funcion calloc para inicializar memoria.
	// Seteamos el tamaño de la lista de funciones del automata a `n`.
	// Retornamos la lista de funciones del automata.
}
```
