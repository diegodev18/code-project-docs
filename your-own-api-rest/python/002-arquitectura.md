---
id: 'arquitectura'
title: 'Arquitectura REST'
description: 'Conoce la arquitectura REST'
---

## ¿Qué es la arquitectura REST?

REST (Representational State Transfer) es un estilo de arquitectura para diseñar servicios web. Se basa en principios simples como:

- Uso del protocolo HTTP.
- Acceso a recursos a través de URLs.
- Uso de métodos HTTP estándar: 
    - **GET** (leer)
    - **POST** (crear)
    - **PUT/PATCH** (actualizar)
    - **DELETE** (eliminar)
- Comunicación sin estado o stateless (cada solicitud contiene toda la información necesaria).
- Las respuestas suelen ser en formato JSON o XML (JSON es el más común hoy en día).

## Códigos de estado

- 1XX: Respuestas informativas.
> *Ejemplo* &rarr; Código 100: Indica que una parte de la solicitud ha sido recibida correctamente y el cliente debe continuar.
- 2XX: Peticiones correctas.
> *Ejemplo* &rarr; Código 204: Este código indica éxito, pero sin contenido en la respuesta.
- 3XX: Redirecciones.
> *Ejemplo* &rarr; Código 301: Indica que una página web se ha movido permanentemente a una nueva ubicación.
- 4XX: Errores del cliente.
> *Ejemplo* &rarr; Código 404: Indica que el servidor no pudo encontrar el recurso solicitado por el cliente.
- 5XX: Errores del servidor:
> *Ejemplo* &rarr; Código 500: Indica un fallo inesperado en el servidor.
