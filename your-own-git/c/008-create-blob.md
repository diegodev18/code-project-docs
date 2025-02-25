---
num: 8
id: 'create-blob'
title: 'Creando un objeto blob'
description: 'Aprende a crear un objeto blob en tu sistema de control de versiones.'
---

En esta lección aprenderás a crear un objeto blob en tu sistema de control de versiones.

Para crear un objeto blob, primero necesitas un archivo que quieras almacenar en tu sistema de control de versiones. En este caso, vamos a crear un archivo llamado `hello.txt` con el siguiente contenido:

```plaintext
Hello, world!
```

Una vez que hayas creado el archivo `hello.txt`, puedes crear un objeto blob con el siguiente comando:

```bash
$ git hash-object -w hello.txt
```

Este comando creará un objeto blob en tu sistema de control de versiones y te devolverá un hash que identifica el objeto blob. Puedes usar este hash para referenciar el objeto blob en tu sistema de control de versiones.

> ¡Felicidades! Has creado un objeto blob en tu sistema de control de versiones usando GIT, ahora vamos a implementarlo en tu propio controlador de versiones!

## Tarea

1. [ ] Crea un archivo llamado `hello.txt` con el contenido `Hello, world!`.
2. [ ] Tu programa debe distingir cuando le das como argumento `hash-object -w {NOMBRE_DEL_ARCHIVO}`.
3. [ ] Tu programa debe obtener el contenido del archivo.
4. [ ] Tu programa debe calcular el hash SHA-1 del contenido del archivo.
5. [ ] Tu programa debe de crear el directorio `.git/objects/{PRIMEROS_DOS_CARACTERES_SHA1}` si no existe.
6. [ ] Tu programa debe calcular el hash ZLIB del contenido del archivo.
7. [ ] Tu programa debe crear un archivo en `.git/objects/{PRIMEROS_DOS_CARACTERES_SHA1}/{RESTO_DEL_HASH_SHA1}` con el contenido comprimido por ZLIB.
