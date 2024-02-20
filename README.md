# Proyecto SpringAngular-AppClientes

Este proyecto está dividido en tres partes principales: el servidor (Spring Boot), el cliente/front-end (Angular), y la base de datos (MySQL con MySQL Workbench).

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes antes de ejecutar la aplicación:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js y npm](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [MySQL Server y MySQL Workbench](https://dev.mysql.com/downloads/)

## Configuración de la Base de Datos

1. Inicia tu servidor MySQL.
2. Crea una base de datos con el nombre deseado.
3. Actualiza las configuraciones de conexión a la base de datos en el archivo `application.properties` del servidor Spring Boot ubicado en `\SpringAngular-AppClientes\Servidor\spring-boot-backend-apirest\src\main\resources`.

## Ejecución del Servidor (Spring Boot)

1. Abre una terminal.
2. Navega al directorio del servidor: `cd \SpringAngular-AppClientes\Servidor\spring-boot-backend-apirest`.
3. Ejecuta el servidor: `./mvnw spring-boot:run`.

El servidor estará disponible en `http://localhost:8080`.

## Ejecución del Cliente (Angular)

1. Abre otra terminal.
2. Navega al directorio del cliente: `cd \SpringAngular-AppClientes\Cliente\clientes-app`.
3. Instala las dependencias: `npm install`.
4. Inicia la aplicación: `ng serve -o`.

El cliente estará disponible en `http://localhost:4200`.

## Acceso a la Aplicación

Abre tu navegador y visita [http://localhost:4200](http://localhost:4200) para acceder a la aplicación.

Atento de que la base de datos esté configurada correctamente para garantizar el funcionamiento adecuado de la aplicación.


Endpoints para pruebas adjuntos en: Angular SpringBoot Clientes.postman_collection.json


## Atajos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
