# Servicio Inventario

Este proyecto es una aplicación de ejemplo desarrollada con **Spring Boot** que implementa un servicio REST para la gestión de productos en un inventario. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos almacenados en una base de datos en memoria (H2).

## Tecnologías utilizadas

- **Java 17**
- **Spring Boot 3.0.0**
  - Spring Web (para la creación de endpoints REST)
  - Spring Data JPA (para la interacción con la base de datos)
- **H2 Database** (base de datos en memoria para desarrollo y pruebas)
- **Lombok** (para reducir el código boilerplate)
- **Maven** (gestor de dependencias y construcción del proyecto)
- **Docker** (para la creación y ejecución de contenedores)

## Endpoints disponibles

### 1. Crear un producto
- **Método**: `POST`
- **URL**: `/api/products`
- **Body de ejemplo**:
  ```json
  {
    "name": "Producto 1",
    "quantity": 10,
    "price": 100.0
  }
  ```

### 2. Obtener todos los productos
- **Método**: `GET`
- **URL**: `/api/products`

### 3. Obtener un producto por ID
- **Método**: `GET`
- **URL**: `/api/products/{id}`

### 4. Actualizar un producto
- **Método**: `PUT`
- **URL**: `/api/products/{id}`
- **Body de ejemplo**:
  ```json
  {
    "name": "Producto Actualizado",
    "quantity": 20,
    "price": 150.0
  }
  ```

### 5. Eliminar un producto
- **Método**: `DELETE`
- **URL**: `/api/products/{id}`

## Construcción y ejecución de la imagen Docker

Sigue los pasos a continuación para construir y ejecutar la imagen Docker de la aplicación:

### 1. Construir la imagen Docker

Desde el directorio raíz del proyecto, ejecuta el siguiente comando para construir la imagen Docker:

```bash
docker build -t servicio-inventario:1.0 -f Docker/Dockerfile .
```

### 2. Ejecutar el contenedor

Una vez construida la imagen, ejecuta el contenedor con el siguiente comando:

```bash
docker run -p 8080:8080 servicio-inventario:1.0
```

Esto expondrá la aplicación en el puerto `8080` de tu máquina.

### 3. Acceder a los endpoints

Puedes probar los endpoints de la aplicación utilizando herramientas como **Postman**, **cURL** o directamente desde tu navegador. Por ejemplo:

- **Crear un producto**: `POST http://localhost:8080/api/products`
- **Obtener un producto por ID**: `GET http://localhost:8080/api/products/{id}`
- **Actualizar un producto**: `PUT http://localhost:8080/api/products/{id}`
- **Eliminar un producto**: `DELETE http://localhost:8080/api/products/{id}`

## Notas adicionales

- La base de datos H2 está configurada en memoria, por lo que los datos se perderán al reiniciar la aplicación.
- Puedes acceder a la consola de H2 en `http://localhost:8080/h2-console` utilizando las credenciales configuradas en el archivo `application.properties`.

¡Disfruta explorando el proyecto!