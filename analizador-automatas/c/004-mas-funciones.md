---
id: 'mas-funciones'
title: 'Más funciones para los ATF.'
description: 'Creamos funciones para inicializar las estructuras de datos de los ATF.'
---

En este módulo te invitamos a construir por ti mismo las funciones esenciales para manejar un Autómata de Transición Finito (ATF). No te daremos todo el código directamente. En su lugar, te guiaremos con descripciones detalladas de lo que debe hacer cada función para que desarrolles tus habilidades de razonamiento y programación en C.

## ¿Qué funciones necesitas implementar?

### 1. crearListaChar(int n)

Deberás crear una función que inicialice una lista dinámica de caracteres con espacio para `n` elementos.

- Piensa en cómo reservar memoria dinámica en C.
- ¿Qué estructura deberías usar para guardar el tamaño y el puntero a la lista?
- ¿Qué pasa si `calloc` falla?

### 2. crearListaInt(int n)

Esta función será muy similar a la anterior, pero para enteros.

- ¿Qué cambia si en lugar de `char` usas `int`?
- ¿Cómo te aseguras de que el tamaño se almacene correctamente?

### 3. crearFuncion(char estado, char simbolo, char estadoFinal)

Aquí crearás una función que construya y devuelva una estructura que representa una transición del autómata.

- ¿Qué elementos contiene una transición?
- ¿Cómo los almacenarías en una estructura?

### 4. crearListaFunciones(int n)

Debes crear una lista dinámica que almacene estructuras de tipo `FUNCION`.

- ¿Qué tipo de puntero necesitas para un arreglo de estructuras?
- ¿Cómo inicializarías su tamaño?

### 5. agregarListaChar(LISTACHAR *listaChar, char agregar)

Permite agregar dinámicamente un nuevo carácter a una lista ya existente.

- ¿Cómo se redimensiona la lista con `realloc`?
- ¿Qué debes hacer si `realloc` retorna NULL?
- ¿Cómo actualizas el tamaño de la lista?

### 6. agregarListaInt(LISTAINT *listaInt, int agregar)

De nuevo, similar al anterior, pero para enteros.

- ¿Notas un patrón entre agregar enteros y caracteres?
- ¿Puedes reutilizar ideas del punto anterior?

### 7. agregarFuncion(LISTAFUNCIONES *listafunc, FUNCION func)

Agrega una nueva transición a la lista de funciones.

- ¿Qué implicaciones tiene redimensionar un arreglo de estructuras?
- ¿Cómo copiarías manualmente una estructura dentro de la lista?

### 8. limpiarCadena(char *cad)

Esta función limpia el contenido de una cadena (rellena con `' '`).

- ¿Cómo se recorre una cadena?
- ¿Qué función de C te da la longitud de una cadena?

### 9. valorEnListaInt(LISTAINT list, int valor)

Debes verificar si un valor se encuentra dentro de una lista de enteros.

- ¿Cómo recorrerías una lista?
- ¿Qué condición deberías usar para saber si el valor existe?

---

## ¿Por qué son importantes estas funciones?

Estas funciones permiten:

- **Gestionar memoria dinámicamente**, útil cuando no se conoce el tamaño exacto de los datos desde el inicio.
- **Definir transiciones** para autómatas de forma clara y ordenada.
- **Escalar tu implementación** sin preocuparte por límites fijos.

## Tip

Puedes comenzar implementando las estructuras necesarias antes de pasar a las funciones. A medida que vayas resolviendo, notarás patrones que podrás reutilizar en varias funciones.

> Recordatorio: ¡Tómalo como un reto! 💪 No copies y pegues, reflexiona en cada paso y verás cómo mejoras tu lógica y comprensión del lenguaje C.
