
# Módulo: Simulación de un Autómata con Cadena de Entrada

Este módulo contiene la función `procesarCadena`, que simula la ejecución de un autómata finito de transición (ATF) al procesar una cadena de entrada. La función evalúa las transiciones entre estados basándose en el alfabeto del autómata y determina si la cadena es aceptada o no.

## Función Principal

### 1. `procesarCadena`

Esta función recursiva simula el procesamiento de una cadena de entrada en un autómata, evaluando las transiciones de estado para cada símbolo de la cadena.

#### Firma:
```c
LISTAINT procesarCadena(AUTOMATA atf, char *palabra, int iteracion, char estado);
```

#### Parámetros:
- `AUTOMATA atf`: El autómata que se va a utilizar para procesar la cadena.
- `char *palabra`: La cadena de entrada que será procesada por el autómata.
- `int iteracion`: El índice actual de la cadena que se está procesando (comienza desde 0).
- `char estado`: El estado actual del autómata.

#### Valor de retorno:
- **LISTAINT**: Una lista de enteros que contiene los resultados de la evaluación de la cadena:
  - **1** si la cadena es aceptada.
  - **0** si la cadena no es aceptada.

#### Descripción:
La función `procesarCadena` se encarga de simular el procesamiento de una cadena en el autómata. Dependiendo de la posición actual de la cadena (controlada por el parámetro `iteracion`), la función realiza las siguientes acciones:

1. **Caso base**: Si `iteracion` es igual a la longitud de la cadena (`strlen(palabra)`), significa que hemos llegado al final de la cadena. En este caso:
   - Si el estado actual es final, la función agrega **1** a la lista de resultados, indicando que la cadena ha sido aceptada.
   - Si el estado no es final, agrega **0**, indicando que la cadena no es aceptada.

2. **Caso recursivo**: Si aún no hemos procesado toda la cadena, la función:
   - Muestra el estado actual y el símbolo que está siendo leído.
   - Obtiene la lista de funciones de transición correspondientes al símbolo actual en el estado actual.
   - Recorre todas las posibles transiciones y, para cada una, realiza una llamada recursiva a `procesarCadena` con el nuevo estado resultante de la transición.
   - Después de procesar todas las transiciones, se agregan los resultados de las transiciones sucesivas a la lista final de resultados.

### Propósito y Uso

La función `procesarCadena` es fundamental para la simulación del comportamiento de un autómata. Este tipo de simulación es útil para:

- **Verificación de cadenas aceptadas**: Determinar si una cadena específica es aceptada por un autómata en función de sus estados y transiciones.
- **Simulación de autómatas**: Permite visualizar cómo el autómata procesa cada símbolo de una cadena y cómo se mueve entre los estados.
- **Depuración de autómatas**: Al imprimir las transiciones y el estado actual, la función proporciona una herramienta útil para depurar y entender el comportamiento del autómata.

#### Ejemplo de Ejecución:

Supongamos que tenemos un autómata con los siguientes parámetros:

- Alfabeto: `{'a', 'b'}`
- Estados: `{'q0', 'q1'}`
- Estado inicial: `q0`
- Estado final: `q1`
- Funciones de transición: 
  - `q0, a -> q1`
  - `q1, b -> q0`

Y que queremos procesar la cadena `"ab"`.

La función `procesarCadena` se ejecutaría de la siguiente manera:

1. En el primer paso, el estado es `q0`, se lee el símbolo `'a'` y el autómata realiza la transición a `q1`.
2. En el segundo paso, el estado es `q1`, se lee el símbolo `'b'` y el autómata vuelve al estado `q0`.
3. Al final de la cadena, el estado es `q0` y no es un estado final, por lo que la cadena **no es aceptada**.

### Salida Esperada:

```c
Estado actual: q0, Leyendo: a
Transición: (q0, a) -> q1
Estado actual: q1, Leyendo: b
Transición: (q1, b) -> q0
Cadena no aceptada
```

---
