# Comienzo en React
## Desarrollo de webs con React
En este momento los archivos disponibles son:
* index.css - CSS básico del tutorial del 3 en raya React
* index.jss - JS completado hasta "Agregando viaje en el tiempo" (no incluido)

### Todos estos archivos estan basados en el [tutorial oficial de React](https://es.reactjs.org/tutorial/tutorial.html)

Como prerequisitos debemos de tener en cuenta
* Tener instalada una version actual de Node.JS
* Tener instalada una version actual de NPM

### Para configurar el IDE local ingresando el comando: npx create-react-app my-app
* npx create-react-app my-app - Crea una carpeta con componentes de React llamada "my-app"
* cd my-app - change directory to my-app
* cd src - entras en la carpeta src
* del * - En windows, limpia el contenido de la carpeta src
* cd ../ - regresar a la carpeta del proyecto
* Agregar los archivos index.css e index.js a la carpeta src

## Setear un proyecto de React con Vite
1. Generamos un paquete JSON: **npm init -y**
2. Agregamos una carpeta projects: **mkdir projects**
3. Entramos en projects: **cd projects**
4. Creamos el entorno de vite en projects: **npm create vite@latest**
5. Nombramos el proyecto, elegimos el framework y la variante que vamos a usar.
   * "Nombre del proyecto"
   * Framework: React
   * JavaScript + SWC (transpilador hecho con Ruse). En un futuro elegir TypeScript + SWC
6. Entramos al directorio del proyecto.
7. Instalamos las dependencias con **npm install**
8. Inicializamos el proyecto con **npm run dev**
