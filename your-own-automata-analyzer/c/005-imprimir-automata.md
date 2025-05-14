---
id: 'imprimir-automata'
title: 'Imprimir Autómata.'
description: 'Creamos una función para imprimir todas las características de un autómata.'
---
Este módulo contiene una función que permite imprimir las características de un autómata finito de transición (ATF). La función `imprimirAutomata` muestra de forma legible los componentes del autómata, como los estados, el alfabeto, el estado inicial, los estados finales y las funciones de transición.

## Función: `imprimirAutomata`

La función `imprimirAutomata` toma como parámetro un autómata de tipo `AUTOMATA` y muestra en la salida estándar (generalmente la consola) los siguientes detalles:

1. **Estados (`Q`)**  
   Se imprimen todos los estados que forman parte del autómata. Estos estados están almacenados en la lista `a.estados.lista` y se recorren para ser mostrados uno a uno.

2. **Alfabeto (`A`)**  
   Se imprime el alfabeto del autómata, que está compuesto por los símbolos con los que el autómata interactúa. Estos símbolos se almacenan en `a.alfabeto.lista`.

3. **Estado inicial (`I`)**  
   El estado inicial es el punto de partida de la ejecución del autómata. Se imprime el estado almacenado en `a.estadoInicial`.

4. **Estados finales (`F`)**  
   Se imprimen los estados finales que son aceptados por el autómata. Estos estados se encuentran en `a.estadosFinales.lista`.

5. **Funciones de transición**  
   Finalmente, se imprime cada función de transición que define cómo el autómata cambia de estado en función de un símbolo de entrada. Las transiciones se almacenan en `a.funciones.funcion` y se imprimen de la siguiente forma:  
   `(<estado>, <símbolo>) = <estado de destino>`

### Código de la función

```c
void imprimirAutomata(AUTOMATA a) {
    int i;
    
    printf("\nQ = { ");
    for(i = 0; i < a.estados.tam; i++) {
        printf("%c ", a.estados.lista[i]);
    }
    printf("}\n");

    printf("A = { ");
    for(i = 0; i < a.alfabeto.tam; i++) {
        printf("%c ", a.alfabeto.lista[i]);
    }
    printf("}\n");

    printf("I = { %c }", a.estadoInicial);

    printf("\nF = { ");
    for(i = 0; i < a.estadosFinales.tam; i++) {
        printf("%c ", a.estadosFinales.lista[i]);
    }
    printf("}\n");

    printf("Funciones de Transición: \n");
    for(i = 0; i < a.funciones.tam; i++) {
        printf("(%c, %c) = %c\n", a.funciones.funcion[i].estado,
                                 a.funciones.funcion[i].simbolo,
                                 a.funciones.funcion[i].resultado);
    }
}
```

## Descripción del flujo de la función

**Impresión de los estados (Q)**  
La función empieza imprimiendo los estados del autómata. Se recorre el arreglo de estados y se muestra cada uno.

**Impresión del alfabeto (A)**  
De forma similar, se recorre el arreglo del alfabeto y se imprime cada símbolo.

**Impresión del estado inicial (I)**  
Se muestra el estado inicial del autómata.

**Impresión de los estados finales (F)**  
Se imprimen los estados que son considerados finales, es decir, aquellos que aceptan las cadenas de entrada.

**Impresión de las funciones de transición**  
Finalmente, se muestran las transiciones definidas en el autómata. Cada transición se imprime en el formato: (<estado>, <símbolo>) = <estado de destino>, lo que indica cómo el autómata pasa de un estado a otro en función de un símbolo del alfabeto.

## ¿Por qué es útil esta función?

La función **imprimirAutomata** es útil para depurar y visualizar los elementos de un autómata, ya que permite ver claramente cómo está definido el autómata en términos de sus estados, alfabeto, estado inicial, estados finales y transiciones. Esto es especialmente valioso en el contexto de simuladores de autómatas o cuando se está desarrollando un analizador léxico o de expresiones regulares, donde el autómata es fundamental.
