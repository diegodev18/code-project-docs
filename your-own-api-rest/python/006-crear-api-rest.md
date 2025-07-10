---
id: 'crear-api-rest'
title: 'Crea tu API Rest con distintos frameworks'
description: 'Aprende a crear tu propia API Rest con Flask, FastAPI y Django Rest Framework'
---

## Aprende a crear tu propia API Rest

En este último apartado vamos a aprender a cómo crear tu propia API Rest utilizando tres frameworks de python distintos: **Flask, FastAPI y Django Rest Framework**.

### Flask

Crea un archivo **app.py** y escribe el siguiente contenido:

```python
# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

countries = [
    {"id": 1, "name": "Thailand", "capital": "Bangkok", "area": 513120},
    {"id": 2, "name": "Australia", "capital": "Canberra", "area": 7617930},
    {"id": 3, "name": "Egypt", "capital": "Cairo", "area": 1010408},
]

def _find_next_id():
    return max(country["id"] for country in countries) + 1

@app.get("/countries")
def get_countries():
    return jsonify(countries)

@app.post("/countries")
def add_country():
    if request.is_json:
        country = request.get_json()
        country["id"] = _find_next_id()
        countries.append(country)
        return country, 201
    return {"error": "Request must be JSON"}, 415
```

Esta aplicación define el endpoint /countries para manejar la lista de countries. Maneja dos diferentes tipos de requests:

- GET /countries retorna la lista de countries.
- POST /countries añade un nuevo countrie a la lista.

Puedes probar la API Rest instalando flask con el siguiente comando: 

```bash
python -m pip install flask
```

### Django Rest Framework

En primer lugar, has de instalar Django y djangorestframework:

```bash
python -m pip install Django djangorestframework
```

Luego, creamos un proyecto django con el siguiente comando:

```bash
django-admin startproject countryapi
```

Luego, creamos una aplicación para el proyecto:

```bash
python manage.py startapp countries
```

Esto creará una carpeta 'countries' dentro del proyecto. Dentro de dicha carpeta se encontrarán los archivos necesarios para la aplicación.

Posteriormente, debemos decirle a la configuración de django que reconozca la aplicación que acabamos de crear, además de djangorestframework. Modificamos el archivo **settings.py** de la siguiente manera: 

```python
# countryapi/settings.py
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "countries",
]
```

Una vez hecho esto, vamos a crear un modelo de datos: 

```python
# countries/models.py
from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=100)
    capital = models.CharField(max_length=100)
    area = models.IntegerField(help_text="(in square kilometers)")
```

Este campo define un modelo Country. Django utilizará este modelo para crear la tabla y sus respectivas columnas en la base de datos para los datos de country.

Seguidamente, debemos migrar esta tabla a la base de datos que estés utilizando, mediante los siguiente comandos: 

```bash
python manage.py makemigrations

python manage.py migrate
```

Una vez tengamos el modelo registrado en la base de datos, vamos a crear un serializer, el cual se va a encargar de convertir los datos en un JSON para la API Rest: 

```python
# countries/serializers.py
from rest_framework import serializers
from .models import Country

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ["id", "name", "capital", "area"]
```

Luego, debemos crear la view que se va a encargar de manejar la lógica:

```python
# countries/views.py
from rest_framework import viewsets

from .models import Country
from .serializers import CountrySerializer

class CountryViewSet(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = Country.objects.all()
```

Luego, debemos implementar la URL que va a manejar la anterior view:

```python
# countries/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CountryViewSet

router = DefaultRouter()
router.register(r"countries", CountryViewSet)

urlpatterns = [
    path("", include(router.urls))
]
```

Finalmente, debemos incluir en la **urls.py** del proyecto las urls de la aplicación:

```python
# countryapi/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("countries.urls")),
]
```

De esta forma, ya hemos creado nuestro API Rest, ahora levantamos el servidor con el siguiente comando y ya podremos ver que se ha creado correctamente la API Rest:

```bash
python manage.py runserver
```

### FastAPI

Crea un archivo **app.py** y escribe el siguiente contenido:

```python
# app.py
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

def _find_next_id():
    return max(country.country_id for country in countries) + 1

class Country(BaseModel):
    country_id: int = Field(default_factory=_find_next_id, alias="id")
    name: str
    capital: str
    area: int

countries = [
    Country(id=1, name="Thailand", capital="Bangkok", area=513120),
    Country(id=2, name="Australia", capital="Canberra", area=7617930),
    Country(id=3, name="Egypt", capital="Cairo", area=1010408),
]

@app.get("/countries")
async def get_countries():
    return countries

@app.post("/countries", status_code=201)
async def add_country(country: Country):
    countries.append(country)
    return country
```

Esta aplicación usa la característica de FastAPI para construir una REST Api para la misma data country que has visto en otros ejemplos.

Puedes probar dicha aplicación instalando fastapi:

```bash
python -m pip install fastapi
```

Además, necesitarás instalar uvicorn, un servidor para ejecutar aplicaciones de FastAPI:

```bash
python -m pip install uvicorn[standard]
```

Una vez instalados fastapi y uvicorn, ejecuta el siguiente comando para ejecutar un servidor de desarrollo:

```bash
uvicorn app:app --reload
```

Abre el navegador y dirígete a *http://127.0.0.1:8000/countries* y verás la respuesta del API Rest funcionando.

