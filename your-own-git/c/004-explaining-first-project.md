---
id: 'explaining-first-project'
title: 'Explicando nuestro primer proyecto'
description: 'Comprende la estructura basica de los programas en C.'
---

# Nuestras primeras lineas en C
Acabas de compilar tu primer programa en C! **Gcc** convierte las instrucciones de tu archivo de texto **.c** que podemos entender en un archivo binario que el sistema operativo comprenda. Veamos que hace cada linea.

## Librerias
``` C
#include <stdio.h>
```
EL lenguaje C por si solo no tiene muchas mas funciones que condicionales, como *if* y *switch*; y operadores (Los que usamos para hacer operaciones matematicas, como +, -, * , /). Porque es un lenguaje que se enfoca en la limpieza.

Pero nos ofrece librerias *standard*, que contienen funciones que nos permitiran hacer muchas cosas. Cada que se necesita una, se utiliza *#include*, seguido de la libreria, en este caso es stdio.h. Su nombre esta formado por:

*std*       Prefijo de "standard"


*io*        I/O se refiere a *Input* (la informacion que el usuario introduce [*input* en ingles] al programa) y *Output* (la informacion que sale [*output* en ingles]). Esta libreria nos otorga funciones con las que podemos imprimir mensajes en consola y procesar informacion otorgada por el usuario en tiempo de ejecucion.

*.h*        Es el prefijo para los *headers*. Son archivos que contienen funciones y definiciones que podremos utilizar en los programas en los que se incluyan.

*< >*       Se utilizan para buscar el archivo *header* en **/usr/include** o **/usr/local/include**. Varia con el compilador y sistema operativo.

> Tambien puedes usar comillas ("") para buscar *headers* en el directorio de tu proyecto.

## Main function
```C
int main(){
```
Cuando hay mas de una funcion en nuestro archivo, se usa **main()** como la que se va a ejecutar por default.

**int**     Cada funcion devuelve un valor, generalmente **0** cuando todo sale bien y **1** cuando ocurre algun error. *Int* indica un valor de retorno **intager**, que corresponde a un entero de 4 bytes.

**main**    Indica el nombre de nuestra funcion.

**()**      Podemos pasar argumentos a funciones colocando su tipo y nombre entre parentesis, como valores numericos, textos, etc. Cuando no lo necesitamos, lo dejamos vacio.


> En distintos entornos se utiliza **(void)** para especificar que no hay argumentos

**{}**      Todo lo que va dentro de la funcion se pone entre brakets ( {} )

## Printf
```C
printf("Hello, World!\n");
```
La funcion printf (de *print formated*) se utiliza para mostrar mensajes en la consola de comandos.

Las cadenas de texto se escriben entre dobles comillas (""). El texto **\n** es un caracter ASCI que indica el salto de linea (n de New Line).

Finalmente terminamos con **;** para cada funcion
> Los condicionales **if** y **switch** no las llevan

## Return
```C
return 0;
```
Recuerdas que los programas generalmente devuelven **1** o **0** para indicar si algo fallo? Esto es lo que estamos haciendo! Si todo sale bien, el programa regresa un **0**, este valor lo podremos imprimir en consola para saber si todo salio bien.

> *hint:*  printf tambien utiliza este truco, pero en vez de solo usar **1** cuando no hay fallos, devuelve la cantidad de caracteres impresos.

# Tu turno
Para poner en practica lo que aprendiste:
- [ ] Imprime un texto de dos lineas.
- [ ] Escribe un codigo que imprima en consola cuantos caracteres imprime un primer mensaaje.
