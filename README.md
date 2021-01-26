# ItemList

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 10.2.0.

Proyecto para prueba tecnica como FrontEnd developer en Mercadolibre.


## Instalación de Dependencias

Correr `npm install` para instalar dependencias del proyecto de Angular, luego de esto navegar a la carpeta `api-gateway` y volver a ejecutar el comando anterior para instalar dependencias del otro proyecto de Node.js.


## Servidor de Desarrollo

Ejecutar `npm run localSERVER` en una terminal para servir el ambiente de desarrollo. Navegar a `http://localhost:880/`. Este comando ejecutará el proyecto interno de Node.js llamado `api-gateway` donde internamente se sirve de forma estatica los transpilados del proyecto de Angular y se expone el metodo getItems.

## Pruebas Unitarias

Correr `ng test` para ejecutar las pruebas unitarias via [Karma](https://karma-runner.github.io).

Tambien puede ver la cobertura total del proyecto ejecutando `ng test --code-coverage` y luego abrir el index.html generado en la carpeta `coverage`.

## Más información

Escribir al Autor [Jhonatan Plata](https://www.linkedin.com/in/jhonantan-plata/).
