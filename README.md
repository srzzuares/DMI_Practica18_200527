<div align="justify">

# 200527 - SRZZUARES

![Logo Utxj](https://i.postimg.cc/15q3LFXF/Banner-de-Twitch-Nubes-Gamer-Chica-Morado.png)

## Información General

- **Creado por:** Crystian Enrique Suárez Cuevas
- **Asignatura:** Desarrollo Movil Integral
- **Grado:** 10
- **Grupo:** A
- **Docente:** MTI. Marco Antonio Ramirez Hernandez

# Desarrollo Backend del Videojuego Api Rest"

### Se crearón dos carpetas para el proyecto:

| Carpetas     | Descripción                                                                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Api_Game** | Tendrá el código, como es la conexión de base de datos, creación de rutas, controladores y el entorno de ejecución NodeJs.                                  |
| **Pruebas**  | Dentro de la carpeta **Api_Game**, Se llevará a cabo imágenes como pruebas de recorrido al crear rutas de insertar, actualizar, encontrar y eliminar datos. |

## Api_Game

| Carpetas         | Descripción                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| **node_modules** | Contendrá los paquetes y funcionalidades para NodeJs.                                                             |
| **src**          | Tendra los archivos y carpetas para el funcionamiento de backend.                                                 |
| **controllers**  | Son archivos que son responsables de manejar las solicitudes del usuario y devolver las respuestas apropiadas..   |
| **models**       | Los modelos se utilizan a menudo en aplicaciones web para representar datos de usuarios, productos , entre otras. |
| **routes**       | Es una carpeta que contiene los archivos JavaScript que definen las rutas de la aplicación.                       |
| **config**       | Es una carpeta que contiene los archivos de configuracion de la aplicación.                                       |
| **lib**          | Librerias                                                                                                         |
| **RestClient**   | Es una carpeta que contiene los archivos http de las rutas que se crearon en el desarrollo del backend.           |

| Archivos         | Descripción                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **package.json** | Es un archivo de configuración que se utiliza en los proyectos de Node.js.                   |
| **.env**         | Es un archivo de configuración que se utiliza para almacenar variables de entorno.           |
| **server.js**    | Se encarga de importar middlewares, las rutas de solicutdes y correr el entorno de ejecución |
| **db.js**        | Este archivo se encarga de conectar la base de datos con el entorno de ejecución NodeJs.     |

| CarpetaControllers      | Descripción                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **playerControlles.js** | Se encarga de recibir la petición y enviar la solicitud a la base de datos o viceversa con la respuesta del usuario. |

| CarpetaModels       | Descripción                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| **playerModels.js** | Se encarga del modelado de datos que está definido en la base de datos. |

| CarpetaRoutes       | Descripción                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| **playerRoutes.js** | Este archivo es para crear rutas para distintas peticiones o solicitudes que requiere el usuario. |

## Paquetes para NodeJs del ProyectoX

Código ha utilizar durante el proyecto:

```bash
# Esto es para dependencias del proyectox
npm i express cors
```

```bash
# Esto es para dependenciasde desarrollo del proyectox
npm i nodemon dotenv bcrypt -D
```

## Paquetes para NodeJs del ProyectoX

| NO. Informes    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actividad 1** | Para esta API Rest del videojuego, se inicio creando la estructura de una arquitectura de software de MVC (modelo vista controlador), instalando las diferentes dependencias para el desarrollo de este proyecto como NodeJs, Express, Nodemon, Dotenv, Cors. Se creó archivos como el **server.js** para poder importar middlewares, las rutas de solicutdes y correr el entorno de ejecución, **playerRoutes.js** que contiene las rutas para poder navegar en la web y **playerController.js** para crear las funcionalidades para el CRUD y un archivo **.env** que guardara las variables que serán secretas para la base de datos u otra cosa. |

## Capturas de Pantalla Actividad 1

<p align="center">
  <img src="./Pruebas/p-1.png" width="2000" alt="Get All Data">
  
  <img src="./Pruebas/p-2.png" width="2000" alt="Get One By ID">
  
  <img src="./Pruebas/p-3.png" width="2000" alt="Get One By Email">
  
  <img src="./Pruebas/p-4.png" width="2000" alt="Create Player">
  
  <img src="./Pruebas/p-5.png" width="2000" alt="Put Player">
  
  <img src="./Pruebas/p-6.png" width="2000" alt="Delete Player">
  
  <img src="./Pruebas/p-7.png" width="2000" alt="Patch Player">
 
</p>

</div>
