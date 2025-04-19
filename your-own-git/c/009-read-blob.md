---
id: 'read-blob'
title: 'Leyendo un objeto blob'
description: 'Aprendiendo a como Git lee un objeto blob.'
---

# Introducción

En el artículo anterior, aprendimos a cómo Git almacena un objeto blob. En este artículo, aprenderemos a cómo Git lee un objeto blob.

## Como Git lee un objeto blob

Para leer un objeto blob, Git sigue los siguientes pasos:

1. Git recibe el hash SHA-1 del objeto blob.

2. Git busca el objeto blob en el directorio `.git/objects/` usando los primeros dos caracteres del hash SHA-1 como nombre de directorio y los últimos 38 caracteres como nombre de archivo. Ejemplo: `.git/objects/12/3456789abcdef0123456789abcdef0123456789`.

3. Git descomprime el contenido del archivo usando el algoritmo **ZLIB**.

4. Git muestra el contenido del objeto blob como `blob {TAMAÑO}\0{CONTENIDO}`.

5. Git muestra el contenido separado por el byte nulo `\0`.

## Usando el comando 'git cat-file'

Para leer un objeto blob, podemos usar el comando `git cat-file`. El comando `git cat-file` muestra el contenido de un objeto blob.

```bash
$ git cat-file -p {HASH}
```

Ahora, crearemos un fichero `archivo.txt` con `Hola, Mundo!` como contenido. El hash SHA-1 del objeto blob será `3b18e512dba79e4c8300dd08aeb37f8e728b8dad`.\

```bash
$ echo "Hola, Mundo!" > archivo.txt
$ git cat-file 3b18e512dba79e4c8300dd08aeb37f8e728b8dad
[Salida]: Hola, Mundo!
```

# Tu turno

1. [ ] Tu programa debe distingir cuando le das como argumento `cat-file -p {HASH}`, el hash tiene que ser de 40 caracteres.
2. [ ] Tu programa debe buscar el contenido del objeto blob en la ubicacion: `.git/objects/{PRIMEROS DOS CARACTERES}/{ULTIMOS 38 CARACTERES}`.
3. [ ] Tu programa debe descomprimir el contenido del archivo usando el algoritmo **ZLIB** y la salida se deberia ver como `blob {TAMAÑO}\0{CONTENIDO}`.
4. [ ] Tu programa debe separar el contenido del objeto blob e imprimirlo en consola.

> **Nota:** Recuerda manejar los errores.
