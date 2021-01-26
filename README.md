# ItemList

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 10.2.0.

El proyecto fue desarrollado para prueba tecnica como FrontEnd developer en Mercadolibre Ene 2021.


## Instalación de Dependencias

Correr `npm install` en la raíz para instalar dependencias del proyecto de Angular, luego de esto debes navegar a la carpeta `api-gateway` y volver a ejecutar el `npm install` para instalar también las dependencias del servidor de Node.js.


## Servidor de Desarrollo

Ejecutar `npm run localServer` en la raíz para servir el ambiente de desarrollo. Navegar a `http://localhost:8080/`. Este comando ejecutará el proyecto interno de Node.js llamado `api-gateway` donde internamente se sirve de forma estática los transpilados del proyecto de Angular y se expone el método getItems.

## Pruebas Unitarias

Correr `ng test` para ejecutar las pruebas unitarias vía [Karma](https://karma-runner.github.io).

También puede ver la cobertura total del proyecto ejecutando `ng test --code-coverage` y luego abrir el index.html generado en la carpeta `coverage`.

## Más información

Escribir al Autor [Jhonatan Plata](https://www.linkedin.com/in/jhonantan-plata/).