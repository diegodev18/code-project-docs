# Módulo: Estructuras de Datos Básicas

En este módulo definimos las los tipos y estructuras fundamentales.

```c
typedef struct {
    char *lista;  // array dinámico de estados o símbolos
    int tam;      // número de elementos
} LISTACHAR;

typedef struct {
    int *lista;   // resultados en entero
    int tam;
} LISTAINT;

typedef struct {
    char estado;    // estado origen
    char simbolo;   // símbolo que consume
    char resultado; // estado destino
} FUNCION;

typedef struct {
    FUNCION *funcion; // array dinámico de funciones de transición
    int tam;
} LISTAFUNCIONES;

typedef struct {
    LISTACHAR     estados;
    LISTACHAR     alfabeto;
    LISTAFUNCIONES funciones;
    char          estadoInicial;
    LISTACHAR     estadosFinales;
} AUTOMATA;
```

# Explicación de cada estructura de datos

- **LISTACHAR**: almacenará una lista de carácteres. 
- **LISTAINT**: almacenará una lista de enteros (esto lo podrías modificar para utilizar unsigned int)
- **LISTAFUNCIONES**: almacenará las funciones de transición
- **AUTOMATA**: Toda la información que necesita un automata según su definición.

[Revisar la definición de un ATF.](https://ibb.co/NgxgM8kQ)