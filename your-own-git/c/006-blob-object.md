---
id: 'blob-object'
title: 'Objeto blob'
description: 'Aprendiendo sobre los objetos blob en Git.'
---

# Los blob objects en Git

## Introducción

Un objeto blob (abreviatura de "binary large object") es una de las piezas fundamentales de la arquitectura de Git. Es la forma en que Git almacena el contenido de los archivos en un repositorio, sin preocuparse por los nombres de archivo ni su ubicación en el sistema de directorios.

### Características principales de un blob:

1. Contiene únicamente el contenido del archivo:

    - Un blob almacena solo los datos del archivo, no guarda metadatos como el nombre del archivo, permisos o su ubicación en el árbol de directorios.
    - Esto permite que Git identifique archivos idénticos, aunque estén en diferentes ubicaciones o tengan nombres diferentes, y los almacene solo una vez.

2. Identificado por un hash:

    - Cada blob tiene un identificador único, que es un hash (generalmente SHA-1 en Git clásico) del contenido del archivo.
    - Esto asegura que dos archivos con el mismo contenido tendrán el mismo hash y, por lo tanto, compartirán el mismo blob.

3. Inmutable:

    - Una vez creado, un blob no cambia. Si el contenido del archivo cambia, se crea un nuevo blob con un nuevo hash.

4. Almacenamiento eficiente:

    - Git almacena los blobs en el directorio .git/objects y usa compresión para ahorrar espacio.

5. No tiene referencias a otros objetos:

    - Los blobs solo almacenan el contenido del archivo, no tienen referencia al nombre o a los permisos.

### Ejemplo de cómo Git usa blobs:

Supongamos que tienes un archivo llamado archivo.txt con el siguiente contenido:

```text
Hola, mundo!
```

Cuando haces un `git add archivo.txt`, Git:

#### Contenido:

1. Crea el objeto blob para el contenido del archivo con el siguiente formato:

    ```text
    blob 12\0Hola, mundo!
    ```

    - `blob` indica que es un objeto blob.
    - `12` es la longitud del contenido.
    - `\0` es un byte nulo.
    - `Hola, mundo!` es el contenido del archivo.

2. Encripta el contenido usando ZLIB, un algoritmo de compresión, y obtiene:

    ```text
    xKs1JU7GElamKHp4yHgE1w==
    ```

    > Este contenido sera el que se almacene en el archivo de objeto.

#### Ubicación:

1. Para la ubicacion del archivo, GIT usa el hash SHA-1 del contenido encriptado, donde:

    1. Se comprime el contenido del archivo.

        ```text
        8b1a9953c4611296a827abf8c47804d7
        ```

    2. Divide el hash en dos partes: los primeros dos caracteres y el resto.

        ```text
        8b/1a9953c4611296a827abf8c47804d7
        ```

        > Los primeros dos caracteres se usan como nombre de la carpeta y el resto como nombre del archivo.

## Relación con otros objetos de Git:

- **Árbol (tree)**: Mientras el blob representa el contenido de un archivo, el árbol organiza los blobs y especifica su ubicación y nombre en el sistema de archivos.
- **Commit**: Un commit incluye un puntero al árbol raíz, que a su vez referencia todos los blobs y subdirectorios.
