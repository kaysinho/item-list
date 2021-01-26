#Imagen de Node.js
FROM node:12-alpine

#Carpeta donde almacenaremos nuestro proyecto Node.js
RUN mkdir /app

#Copiar todo nuestro proyecto Node.js a la carpeta anteriormente creada para Node.js
COPY . /app

#Especificamos el directorio de trabajo
WORKDIR /app

#Descargar dependencias del proyecto Node.js
RUN npm install

#Exponer el puerto de acceso publico
EXPOSE 8080

#Correr proyecto Node.js
ENTRYPOINT [ "sh", "-c", "node server.js" ]