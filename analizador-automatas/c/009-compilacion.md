
# Módulo: Empaquetado en un archivo de cabecera (.h) y archivo .c

Este módulo describe el proceso de empaquetar todas las funciones utilizadas en los módulos previos en un archivo de cabecera (`automatas.h`) y luego crear un archivo `.c` que las utilice. Además, es necesario crear los archivos de texto (`alfabeto.txt`, `estadoInicial.txt`, `estados.txt`, `estadosFinales.txt`, `funciones.txt`) dentro de una carpeta que represente el automáta.

## Archivos necesarios

1. **Archivo de cabecera (`automatas.h`)**:
   El archivo de cabecera debe contener las declaraciones de todas las funciones utilizadas para gestionar el autómata, así como las estructuras que se utilizan.

   ```c
   #ifndef AUTOMATAS_H
   #define AUTOMATAS_H

   #include <stdio.h>
   #include <stdlib.h>
   #include <string.h>

   typedef struct {
       char *lista;
       int tam;
   } LISTACHAR;

   typedef struct {
       char estado;
       char simbolo;
       char resultado;
   } FUNCION;

   typedef struct {
       LISTACHAR estados;
       LISTACHAR alfabeto;
       LISTACHAR estadosFinales;
       FUNCION *funcion;
       char estadoInicial;
   } AUTOMATA;

   LISTACHAR crearListaChar(int n);
   LISTAINT crearListaInt(int n);
   FUNCION crearFuncion(char estado, char simbolo, char estadoFinal);
   LISTAFUNCIONES crearListaFunciones(int n);
   void agregarListaChar(LISTACHAR *listaChar, char agregar);
   void agregarListaInt(LISTAINT *listaInt, int agregar);
   void agregarFuncion(LISTAFUNCIONES *listafunc, FUNCION func);
   AUTOMATA cargarAutomata(char *ruta);
   void imprimirAutomata(AUTOMATA a);
   LISTAINT procesarCadena(AUTOMATA atf, char *palabra, int iteracion, char estado);
   
   #endif
   ```

2. **Archivo `.c`**:
   Este archivo debe incluir la implementación de las funciones y utilizar el archivo de cabecera `automatas.h`. El siguiente código muestra un ejemplo básico de cómo hacerlo.

   ```c
   #include<stdio.h>
   #include<stdlib.h>
   #include<string.h>

   #include "automatas.h"

   int main(){
       char *rutaAtf = (char *) calloc(64, sizeof(char)); //Nombre del automata (Nombre de la carpeta)
       char *palabra = (char *) calloc(64, sizeof(char));
       int i;

       printf("Introduce el nombre del automata (carpeta) --> ");
       gets(rutaAtf);

       AUTOMATA atf = crearAutomata();
       atf = cargarAutomata(rutaAtf);

       imprimirAutomata(atf);

       do{
           printf("Para salir no presiones nada y coloca enter ");
           printf("Introduce una cadena para procesarla: --> ");
           fgets(palabra, 64, stdin);
           palabra[strlen(palabra)-1] = '\0';
           if(strcmp(palabra, "") == 0) break;

           LISTAINT valoresProcesamiento = crearListaInt(0);
           valoresProcesamiento = procesarCadena(atf, palabra, 0, atf.estadoInicial);
           int procesada = valorEnListaInt(valoresProcesamiento, 1);
           printf("La cadena %s ", palabra);
           printf((procesada)? " HA SIDO PROCESADA" : " NO PUDO SER PROCESADA");
       }while(1);
       return 0;
   }
   ```

3. **Archivos de texto**:
   Los siguientes archivos deben ser creados dentro de una carpeta específica para representar el autómata. Cada archivo debe contener los datos necesarios para definir el autómata.

   - **`alfabeto.txt`**: Contiene los símbolos del alfabeto del autómata.
   - **`estadoInicial.txt`**: Contiene el estado inicial del autómata.
   - **`estados.txt`**: Contiene todos los estados del autómata.
   - **`estadosFinales.txt`**: Contiene los estados finales del autómata.
   - **`funciones.txt`**: Contiene las funciones de transición, cada una representada por el estado, el símbolo y el resultado.

   **Ejemplo de `alfabeto.txt`:**
   ```
   a
   b
   c
   ```

   **Ejemplo de `estadoInicial.txt`:**
   ```
   q0
   ```

   **Ejemplo de `estados.txt`:**
   ```
   q0
   q1
   q2
   ```

   **Ejemplo de `estadosFinales.txt`:**
   ```
   q2
   ```

   **Ejemplo de `funciones.txt`:**
   ```
   q0 a q1
   q1 b q2
   q2 c q0
   ```

## Resumen de pasos

1. Crear un archivo de cabecera `automatas.h` que contenga las declaraciones de las funciones y las estructuras necesarias.
2. Implementar las funciones en un archivo `.c` que incluya `automatas.h`.
3. Crear una carpeta con los archivos `alfabeto.txt`, `estadoInicial.txt`, `estados.txt`, `estadosFinales.txt` y `funciones.txt`.
4. Ejecutar el programa, proporcionando la ruta de la carpeta donde se encuentra el autómata.