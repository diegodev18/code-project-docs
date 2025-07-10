---
id: 'access'
title: 'Acceso de los REST APIs a los datos web'
description: 'Conoce cómo proporcionan acceso los REST APIs a los datos web'
---

## ¿Cómo proporcionan acceso los REST APIs a los datos web?

Un REST API (Interfaz de Programación de Aplicaciones basada en REST) permite que sistemas o aplicaciones se comuniquen entre sí mediante peticiones HTTP. Cada endpoint (URL) representa un recurso, como por ejemplo usuarios, productos, artículos, etc.

Ejemplo: 

```bash
GET https://api.ejemplo.com/usuarios/1
```
Devuelve los datos del usuario con ID 1.

Ventajas:

- Separación entre frontend y backend.
- Escalabilidad.
- Reutilización de servicios.

### Uso de sustantivos en puntos finales y nombres en plural

En el correcto diseño de una API del estilo REST, se considera utilizar sustantivos y nombres en plural en nuestros puntos finales y NO verbos de acción, esto es básicamente porqué la acción ya está determinada en los verbos de HTTP.

- **INCORRECTO**

```bash
POST https://api.com/v1/createUser
```
- **CORRECTO**

```bash
POST https://api.com/v1/users
```

### Uso correcto de filtrado, clasificación y paginación.

Para realizar las operaciones de filtrado, clasificación y paginación en nuestra API REST, lo debemos hacer mediante Query Strings. Las Query Strings o cadenas de consultas son un término que se utiliza para hacer referencia a una interacción adicional sobre un recurso o base de datos.

A continuación algunas referencias y estandarizaciones para algunas acciones:

- Filtrado de recursos (key=value)

```bash
GET https://api.com/v1/users?first_name=diego&last_name=cortes
```

- Orden de recursos (sort)

```bash
GET https://api.com/v1/users?sort=username&order=desc
```

- Paginación de recursos (offset and limit)

```bash
GET https://api.com/v1/users?offset=50&limit=50
```

- Buscador de resultados (q)

```bash
GET https://api.com/v1/users?q=diego
```

- Buscador de campos específicos (fields)

```bash
GET https://api.com/v1/users?fields=first_name,last_name
```

### Diseño de URL con patrones lógicos y jerárquia

En la arquitectura REST, una URL sigue un patrón lógico que refleja la estructura jerárquica de los recursos disponibles en el sistema. Por ejemplo, supongamos que tenemos una relación entre autores y libros, una relación uno a muchos. Aquí el ejemplo de cómo se vería esta estructura en las rutas de nuestro sistema:

- Obtener todos los autores:

```bash
GET /autores
```

- Obtener un autor específico:

```bash
GET /autores/{id}
```

- Obtener todos los libros de un autor:

```bash
GET /autores/{id}/libros
```

- Obtener un libro específico de un autor:

```bash
GET /autores/{id_autor}/libros/{id_libro}
```

- Crear un nuevo libro para un autor:

```bash
POST /autores/{id}/libros
```

- Actualizar la información de un libro de un autor:

```bash
PUT /autores/{id_autor}/libros/{id_libro}
```

- Eliminar un libro de un autor:

```bash
DELETE /autores/{id_autor}/libros/{id_libro}
```