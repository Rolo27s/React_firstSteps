# Primera aplicación de React
Repositorio de ayuda: [Project](https://github.com/AlvYuste/react-course-wishlist)

## Setup
1. Instalamos nvm (node version manager) desde su [repositorio oficial](https://github.com/nvm-sh/nvm). En mi caso usaré la [version de windows](https://github.com/coreybutler/nvm-windows)
2. Instalamos [NodeJS](https://nodejs.org/en/download). Deberá incluir npm.
   > Revisamos las instalaciones necesarias con:
   > * nvm -v
   > * node -v
   > * npm -v

   > *Es una opción trabajar con Yarn que es un extensor de npm*
3. Navegamos hasta la carpeta donde desarrollaremos el proyecto y lanzamos *npm init*
4. La consola nos irá preguntando una serie de cosas. Si las dejamos vacías admitimos o sus valores por defecto o vacío. En mi caso solo complete el repositorio de github. Se genera un archivo *package.json* con las configuraciones. Esto será necesario para controlar todas las dependencias.
5. Instalamos la dependencia de React: npm install --save react
6. Instalamos el empaquetador Parce: npm install --save-dev parcel-bundler
7. Instalamos la dependencia de React-DOM: npm install --save react-dom
8. En este momento decidimos usar Yarn en el proyecto:
   1. npm install -g yarn
   2. yarn add --dev parcel-bundler
9. Añadimos el script **"start": "parcel index.html"** al archivo package.json y ya tendríamos disponible el comando *yarn start* que ejecutaría el archivo index.html