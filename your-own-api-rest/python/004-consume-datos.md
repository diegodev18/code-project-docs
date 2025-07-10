---
id: 'consumir-datos'
title: 'Consume datos de una API Rest'
description: 'Aprende a consumir datos de una API Rest con python'
---

## ¿Cómo consumir datos de una API Rest?

En este apartado vamos a aprender a cómo consumir datos de una API Rest con python haciendo uso de la librería **requests**.
En Python, la biblioteca **requests** permite realizar fácilmente peticiones HTTP para consumir APIs REST.
 
Por tanto, si no tienes instalado dicha librería, la puedes instalar con el siguiente comando:

```bash
pip install requests
```

## Ejemplos para cada método HTTP:

### GET

```python
import requests

url = "https://pokeapi.co/api/v2/pokemon/pikachu"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("Error:", response.status_code)
```

### POST

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts"
nuevo_post = {
    "title": "Nuevo título",
    "body": "Contenido del post",
    "userId": 1
}

response = requests.post(url, json=nuevo_post)

if response.status_code == 201:
    print("Post creado:")
    print(response.json())
else:
    print("Error al crear:", response.status_code)
```

### PUT

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
datos_actualizados = {
    "id": 1,
    "title": "Título actualizado completamente",
    "body": "Cuerpo del post actualizado",
    "userId": 1
}

response = requests.put(url, json=datos_actualizados)

if response.status_code == 200:
    print("Post actualizado:")
    print(response.json())
else:
    print("Error al actualizar:", response.status_code)
```

### PATCH

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
parche = {
    "title": "Título modificado"
}

response = requests.patch(url, json=parche)

if response.status_code == 200:
    print("Post modificado:")
    print(response.json())
else:
    print("Error al modificar:", response.status_code)
```

### DELETE

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"

response = requests.delete(url)

if response.status_code == 200 or response.status_code == 204:
    print("Post eliminado correctamente.")
else:
    print("Error al eliminar:", response.status_code)
```
