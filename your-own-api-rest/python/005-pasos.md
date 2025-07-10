---
id: 'pasos'
title: 'Aprende los pasos para crear tu propia API Rest'
description: 'Conoce y aprende los pasos a seguir para poder crear tu API Rest'
---

## Pasos a seguir para construir tu API Rest

En este apartado veremos los 5 pasos esenciales para crear tu API Rest. ¡Vamos a ello!

### 1. Diseña los recursos

Piensa: ¿Qué entidades manejará la API?

Ejemplo:
Supongamos que estamos construyendo una API para una tienda en línea.

Recursos principales:

- /usuarios → para manejar usuarios

- /productos → para manejar productos

- /pedidos → para manejar compras

Cada uno es un recurso, y tendrá una o varias operaciones (GET, POST, etc.).

### 2. Elegir una tecnología

Frameworks recomendados:

- Flask – sencillo y flexible.
- FastAPI – moderno, rápido, con validación automática.
- Django REST Framework – potente para proyectos grandes.

### 3. Crear rutas (endpoints)

Aquí definimos las operaciones sobre los recursos. En el siguiente apartado lo veremos con ejemplos.

### 4. Probar la API

Puedes probar las rutas localmente usando:

- Postman (interfaz gráfica)
- curl (línea de comandos)

Ejemplo con *curl*:

```bash
curl -X POST http://localhost:8000/usuarios \
-H "Content-Type: application/json" \
-d '{"id": 1, "nombre": "Ana", "email": "ana@email.com"}'
```

### 5. Documentar la API

Una vez tengas terminada tu API Rest es fundamental tener una buena documentación de esta, para que los usuarios en el momento de querer utilizarla poder facilitarle el acceso a este todo lo posible.

## En el último apartado veremos cómo crear una API Rest en los distintos frameworks