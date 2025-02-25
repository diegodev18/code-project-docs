---
id: 'acciones'
title: 'Acciones parte 2'
description: 'En esta lección, nos adentraremos mas en cada acción y veremos la teoria detras de cada una.'
---

En esta leccion, nos adentraremos mas en cada acción de las cuales conformara nuestro proyecto final y veremos la teoria detras de cada una.

## Archivo

### Nueva pestaña

La acción de nueva pestaña permite al usuario abrir una nueva pestaña dentro del editor de texto, lo que facilita la gestión de múltiples documentos en una sola ventana. Esta función es esencial en la mayoría de los editores de texto modernos.

#### Teoria

Cuando el usuario selecciona la opción de Nueva pestaña, el editor debe crear una nueva pestaña en la barra de navegación superior. Cada pestaña representa un archivo diferente y permite cambiar entre documentos fácilmente.

Al abrir una nueva pestaña, su contenido debe estar vacío o puede incluir un mensaje de "Nuevo documento" como marcador de posición. Además, si hay varias pestañas abiertas, el usuario debe poder cerrarlas individualmente y cambiar entre ellas con un simple clic.

### Abrir

La acción de Abrir permite al usuario cargar un archivo de texto existente en el editor, facilitando la edición y visualización de documentos previamente guardados. Esta función es fundamental en cualquier editor de texto.

#### Teoria

Cuando el usuario selecciona la opción de Abrir, se debe mostrar un cuadro de diálogo del sistema que permita navegar por los archivos y seleccionar uno para cargarlo.

Una vez seleccionado el archivo, su contenido debe mostrarse en la pestaña activa del editor. Si no hay una pestaña abierta, se debe crear una nueva automáticamente para cargar el archivo.

El editor también debe gestionar la codificación del archivo correctamente (como UTF-8) para evitar problemas con caracteres especiales. En caso de que el archivo ya esté abierto en otra pestaña, puede mostrarse un aviso o cambiar automáticamente a esa pestaña.

### Guardar

La acción de Guardar permite al usuario almacenar el contenido del archivo actual en el disco, asegurando que los cambios realizados no se pierdan. Es una funcionalidad esencial en cualquier editor de texto.

#### Teoria

Al seleccionar la opción de Guardar, el sistema debe verificar si el archivo ya tiene una ubicación y un nombre asignado:

- Si el archivo ya fue guardado previamente, simplemente se sobrescribe con el contenido actual.
- Si el archivo es nuevo y aún no ha sido guardado, se debe abrir un cuadro de diálogo para que el usuario elija una ubicación y un nombre de archivo.

El editor debe manejar correctamente la codificación del texto (como UTF-8) para evitar la pérdida de caracteres especiales. Además, sería útil implementar un indicador visual (por ejemplo, un asterisco en el nombre de la pestaña) para mostrar si hay cambios sin guardar en el documento.

### Cerrar pestaña

La acción de Cerrar pestaña permite al usuario cerrar una pestaña abierta en el editor, eliminándola de la barra de navegación y liberando espacio en la interfaz.

#### Teoria

Cuando el usuario elige cerrar una pestaña, el sistema debe verificar si hay cambios sin guardar en el documento:

- Si no hay cambios sin guardar, la pestaña se cierra inmediatamente.
- Si hay cambios sin guardar, se debe mostrar un cuadro de diálogo preguntando si el usuario desea guardar los cambios antes de cerrar.

Si el usuario tiene una sola pestaña abierta y la cierra, el editor puede abrir automáticamente una nueva pestaña en blanco o cerrar completamente la aplicación, dependiendo del comportamiento deseado. También es recomendable permitir el cierre de pestañas mediante atajos de teclado (por ejemplo, `Ctrl + W`).

### Salir

La acción de Salir permite al usuario cerrar completamente la aplicación, finalizando todas las sesiones y liberando los recursos utilizados.

#### Teoria

Cuando el usuario elige la opción Salir, el sistema debe comprobar si hay documentos con cambios sin guardar:

- Si no hay cambios sin guardar, la aplicación se cierra inmediatamente.
- Si hay cambios sin guardar, se debe mostrar un cuadro de diálogo preguntando si el usuario desea guardar los cambios antes de salir.

Si el usuario confirma el cierre sin guardar, la aplicación se cierra y se descartan los cambios. En caso de múltiples pestañas abiertas, el sistema puede ofrecer la opción de guardar o descartar los cambios para cada una.

Es recomendable que esta acción tenga un atajo de teclado, como Ctrl + Q o Alt + F4, y que, en algunos sistemas operativos, también se pueda acceder desde la bandeja del sistema si la aplicación se ejecuta en segundo plano.

## Edición

### Deshacer

La acción de Deshacer permite al usuario revertir el último cambio realizado en el documento, restaurando el estado anterior del texto. Esta funcionalidad es esencial en cualquier editor de texto, ya que mejora la usabilidad y previene errores accidentales.

#### Teoria

Cuando el usuario activa la opción Deshacer, el sistema debe restaurar el contenido del documento al estado que tenía antes del último cambio realizado. Este proceso puede repetirse varias veces, permitiendo deshacer múltiples acciones en orden inverso.

El editor debe mantener un historial de cambios que permita registrar cada modificación realizada en el documento. Algunas implementaciones avanzadas incluyen límites en la cantidad de cambios que se pueden deshacer o la capacidad de deshacer cambios incluso después de haber guardado el archivo.

Esta acción suele estar disponible en la barra de herramientas, en el menú de edición y mediante un atajo de teclado común, como `Ctrl + Z`.

### Cortar

La acción de Cortar permite al usuario eliminar el texto seleccionado y almacenarlo temporalmente en el portapapeles, para luego pegarlo en otra ubicación dentro del mismo documento o en otra aplicación.

#### Teoria

Cuando el usuario activa la opción Cortar, el sistema debe:

1. Verificar si hay una selección de texto: Si no hay texto seleccionado, la acción no tiene efecto.
2. Copiar el texto seleccionado al portapapeles: Esto permite que el usuario lo pegue posteriormente.
3. Eliminar el texto del documento en la posición original.

Esta función es útil para reorganizar contenido dentro de un documento o mover texto entre diferentes archivos.

El comando Cortar suele estar disponible en la barra de herramientas, en el menú de edición y mediante el atajo de teclado `Ctrl + X`.

### Copiar

La acción de Copiar permite al usuario duplicar el texto seleccionado y almacenarlo temporalmente en el portapapeles, sin eliminarlo del documento original.

#### Teoria

Cuando el usuario activa la opción Copiar, el sistema debe:

1. Verificar si hay una selección de texto: Si no hay texto seleccionado, la acción no tiene efecto.
2. Copiar el texto seleccionado al portapapeles, permitiendo que el usuario lo pegue en otra ubicación dentro del mismo documento o en otra aplicación.

A diferencia de la acción Cortar, el texto original permanece intacto en su posición actual.

El comando Copiar suele estar disponible en la barra de herramientas, en el menú de edición y mediante el atajo de teclado `Ctrl + C`.

### Pegar

La acción de Pegar permite al usuario insertar el contenido previamente copiado o cortado desde el portapapeles en la ubicación del cursor dentro del documento.

#### Teoria

Cuando el usuario selecciona la opción Pegar, el sistema debe:

1. Verificar que haya contenido en el portapapeles: Si no hay nada copiado o cortado previamente, la acción no tiene efecto.
2. Insertar el contenido del portapapeles en la posición actual del cursor, reemplazando cualquier texto seleccionado si es el caso.

El texto pegado puede ser un fragmento de texto, una imagen o cualquier otro contenido válido que haya sido copiado o cortado.

La acción Pegar está generalmente disponible en el menú de edición, en la barra de herramientas, y a través del atajo de teclado `Ctrl + V`.

### Eliminar

La acción de Eliminar permite al usuario borrar el texto o contenido seleccionado dentro del documento.

#### Teoria

Cuando el usuario selecciona un fragmento de texto y elige la opción Eliminar, el sistema debe:

1. Eliminar el texto seleccionado del documento.
2. Si no hay texto seleccionado, la acción puede eliminar el carácter al lado del cursor (dependiendo de si se utiliza el comando Eliminar o Retroceso).

La acción de Eliminar se aplica únicamente al texto seleccionado o al carácter en la posición del cursor, y no afecta al contenido fuera de esa área.

Esta acción está disponible en el menú de edición, la barra de herramientas y, en algunos casos, mediante un atajo de teclado como `Supr` (en la mayoría de los teclados).

### Buscar

La acción de Buscar permite al usuario localizar una palabra, frase o patrón específico dentro del documento, facilitando la navegación en textos largos.

#### Teoria

Cuando el usuario activa la opción Buscar, el sistema debe:

1. Mostrar un cuadro de búsqueda en el que el usuario puede ingresar el texto o patrón que desea buscar.
2. Resaltar las coincidencias encontradas en el documento, desplazándose a través de ellas.
3. Permitir la búsqueda incremental, es decir, a medida que el usuario escribe, el sistema va buscando y mostrando los resultados en tiempo real.
4. Gestionar las opciones de búsqueda, como la posibilidad de buscar con distinción de mayúsculas y minúsculas, o usar expresiones regulares para patrones complejos.

El sistema debería también permitir la opción de Buscar y reemplazar para modificar automáticamente todas las instancias encontradas, y tener la capacidad de navegar entre las coincidencias con botones de "Siguiente" y "Anterior".

El comando Buscar generalmente está disponible en el menú de edición y puede activarse mediante el atajo de teclado `Ctrl + F`.

## Ver

### Zoom

La acción de Zoom permite al usuario aumentar o reducir el tamaño de la fuente o la vista del documento, facilitando la lectura o la edición según las preferencias del usuario.

#### Teoria

Cuando el usuario activa la opción Zoom, el sistema debe:

1. Ajustar el tamaño de la fuente del texto en el documento, haciendo que el texto sea más grande o más pequeño.
2. El cambio en el zoom debe aplicarse de manera uniforme en todo el documento, afectando tanto al texto visible como a las áreas de la interfaz relacionadas.
3. El usuario debe poder aumentar o reducir el zoom de manera progresiva, generalmente con botones de "+" y "-" en el menú de vista o utilizando un atajo de teclado como `Ctrl + +` para aumentar o `Ctrl + -` para reducir.
4. Se puede permitir un nivel de zoom predeterminado, como 100%, y permitir que el usuario vuelva a esa configuración mediante un atajo como `Ctrl + 0` (restablecer zoom).

Este control de zoom es útil para la accesibilidad, ya que los usuarios con dificultades visuales pueden aumentar el tamaño del texto, mientras que otros prefieren reducirlo para ver más contenido en la pantalla.
