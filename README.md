# Prueba Tecnica, consumiendo la POKEAPI

Este proyecto es una **prueba técnica** desarrollada con **Angular 15**, donde se consume la **PokeAPI** para interactuar con información de Pokémon. La aplicación permite al usuario llenar un formulario, seleccionar Pokémones y ver su perfil al final del flujo.

## Descripción

La aplicación consta de varias rutas y pantallas:

1. **Pantalla principal**: El usuario llena un formulario con sus datos y escoge una imagen de perfil, cuyos datos se almacenan en `sessionStorage`.
2. **Selección de Pokémones**: En la siguiente pantalla, el usuario puede elegir 3 Pokémon de dos maneras:

   - Seleccionando entre los primeros 9 Pokémon que se muestran en la pantalla.
   - Buscando por el índice o el nombre del Pokémon.

   Estos 3 Pokémon seleccionados se almacenan también en `sessionStorage`.

3. **Pantalla de perfil**: Finalmente, la aplicación muestra una pantalla de perfil donde se muestran todos los datos almacenados en el `sessionStorage`, incluyendo el nombre, la imagen y los Pokémon seleccionados.

## Características

- Consumo de la **PokeAPI** para obtener la información de los Pokémon.
- Formulario interactivo en la pantalla principal.
- Almacenamiento de datos en **sessionStorage** para persistencia durante la navegación.
- Selección de Pokémon a través de un listado o búsqueda por nombre/índice.
- Visualización de datos en la pantalla de perfil.

## Requisitos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/) en su versión 15 o superior.
- [Angular CLI](https://angular.io/cli) en su versión 15 o superior.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio** desde la URL proporcionada:

   ```bash
   git clone https://github.com/lovo98/prueba-tecnica-cuscatlan.git

   ```

2. **Entra en la carpeta del proyecto**

   ```bash
   cd nombre-del-proyecto

   ```

3. **nstala las dependencias del proyecto**

   ```bash
   npm install

   ```

4. **Ejecuta el proyecto en tu máquina local:** Una vez instaladas las dependencias, ejecuta el siguiente comando para levantar el servidor de desarrollo

   ```bash
   ng serve

   ```

   Luego, abre tu navegador y navega a http://localhost:4200/ para ver la aplicación en funcionamiento.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- FontAwesome: Para usar iconos en la aplicación.
- Google Fonts: Para cargar tipografía personalizada.
- CSS: Para la gestión de estilos y diseño en la aplicación.
- PokeAPI: Para obtener los datos de los Pokémon.
