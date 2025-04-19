# Módulo: Funciones de Utilidad para el Autómata

Este módulo contiene funciones que son útiles para manipular y analizar un autómata finito de transición (ATF). Las funciones proporcionadas permiten verificar si un estado es final, obtener una nueva cadena a partir de un índice dado, y recuperar una lista de funciones de transición para un evento y un estado específicos.

## Funciones

### 1. `esEstadoFinal`

Esta función verifica si un estado específico es un estado final en el autómata.

```c
int esEstadoFinal(AUTOMATA atf, char estado);
```
**Parámetros**:
**AUTOMATA atf**: El autómata en el que se va a buscar el estado.

**char estado**: El estado a verificar si es final.

**Valor de retorno**:
1 si el estado es final.
0 si el estado no es final.

**Descripción**:
La función recorre la lista de estados finales del autómata y compara el estado proporcionado con los elementos en la lista. Si encuentra una coincidencia, devuelve 1, indicando que el estado es final. Si no encuentra el estado, devuelve 0.

### 2. `obtenerNuevaCadena`
Esta función obtiene una subcadena de una cadena original, comenzando en un índice dado.

```c
char *obtenerNuevaCadena(char *cad, int indice);
```
**Parámetros**:
**char *cad**: La cadena original de la que se extraerá la subcadena.

**int indice**: El índice a partir del cual se extraerá la subcadena.

**Valor de retorno**:
Una nueva cadena que contiene la subcadena a partir del índice especificado.

**Descripción**:
La función toma una cadena de entrada y devuelve una nueva cadena que contiene todos los caracteres a partir de un índice especificado. Esto puede ser útil, por ejemplo, para cortar una cadena de entrada en el proceso de simulación de un autómata.

### 3. `obtenerListaFuncion`
Esta función obtiene todas las funciones de transición correspondientes a un estado y un evento específicos en un autómata.

```c
LISTAFUNCIONES obtenerListaFuncion(AUTOMATA atf, char evento, char estado);
```

**Parámetros**:
**AUTOMATA atf**: El autómata en el que se buscarán las funciones de transición.

**char evento**: El símbolo del alfabeto que desencadena la transición.

**char estado**: El estado en el que ocurre la transición.

**Valor de retorno**:
Una lista de funciones de transición que corresponden al evento y estado dados.

**Descripción**:
La función recorre las funciones de transición del autómata y busca todas las que tienen el estado y el símbolo especificados. Luego, devuelve una lista con las funciones de transición encontradas.

**Propósito y Uso de Este Módulo**
Este módulo tiene como objetivo proporcionar funciones que simplifiquen la manipulación de un autómata. Permite verificar si un estado es final, obtener subcadenas de cadenas de entrada y recuperar transiciones específicas, lo que resulta útil para simular el comportamiento de un autómata o para realizar análisis sobre las cadenas procesadas por él.