# fyJSON

<p align="center">
  <img src="./LogoFondoBlancoCompleto.png" alt="Logo de fyJSON" width="220" />
</p>

<p align="center">
  <strong>Generador web de datos de prueba con exportación inmediata a JSON.</strong>
</p>

fyJSON es una aplicación web ligera orientada a acelerar el desarrollo de software mediante la creación de datos ficticios reutilizables. Su propuesta de valor es simple: **reducir tiempo de preparación de datos de prueba** y facilitar pruebas funcionales, demos y prototipos sin depender de información real.

---

## Descripción del proyecto

El proyecto permite seleccionar un tipo de dataset, generar registros aleatorios en una tabla visual y descargar el resultado como archivo `.json` desde el navegador. Actualmente funciona como una solución frontend sin dependencias externas ni backend.

## Objetivos

- Facilitar la generación de datos de ejemplo para desarrollo y pruebas.
- Ofrecer una experiencia rápida desde una interfaz web simple.
- Permitir exportación directa en formato JSON.
- Mantener una base de proyecto clara para futuras ampliaciones de formatos.

## Características actuales

- Generación de datos aleatorios para tres tipos:
  - **Personas**
  - **Productos**
  - **Países/Ciudades**
- Renderizado de 30 registros por generación en tabla HTML.
- Actualización dinámica de encabezados según el tipo de datos.
- Descarga del resultado generado en archivo `datos.json`.
- Interfaz con estilos personalizados y animación de pantalla de introducción.

## Casos de uso

- Pruebas de tablas y componentes frontend.
- Simulación de datos para demos funcionales.
- Prácticas académicas de manipulación y consumo de JSON.
- Ensayos rápidos de flujos de exportación de datos.

## Tecnologías utilizadas

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)

## Estructura real del repositorio

```text
fyJSON/
├── README.md
├── index.html
├── index.css
├── app.js
├── LogoFondoBlancoCompleto.png
├── LogoFondoBlancoMini.png
├── LogoFondoBlancoTexto.png
├── LogoFondoNegroCompleto.png
├── LogoFondoNegroMini.png
├── LogoFondoNegroTexto.png
└── LogoMiniOficial.ico
```

### Punto de entrada

- Archivo principal: [`index.html`](./index.html)
- Lógica de generación: [`app.js`](./app.js)
- Estilos de interfaz: [`index.css`](./index.css)

## Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Judithpc23/fyJSON.git
   ```

2. Entra al directorio:

   ```bash
   cd fyJSON
   ```

3. Ejecuta la aplicación abriendo `index.html` en tu navegador.

> También puedes usar un servidor local estático (por ejemplo, la extensión Live Server en VS Code) para una experiencia de desarrollo más cómoda.

## Visión de futuras funcionalidades

Como evolución del producto, el proyecto contempla incorporar:

- Exportación en formato **XML**.
- Exportación en formato **CSV**.
- Generación y/o exportación en formato **SQL**.

Estas capacidades se consideran parte del roadmap y **no están implementadas todavía** en la versión actual del repositorio.

## Guía de contribución

Las contribuciones son bienvenidas.

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio:

   ```bash
   git checkout -b feature/mi-mejora
   ```

3. Implementa y documenta el ajuste.
4. Envía un Pull Request con contexto claro del cambio.

## Equipo de desarrollo

Autores listados actualmente en el proyecto:

- [Judithpc23](https://github.com/Judithpc23)
- [Alinsonp](https://github.com/Alinsonp)
- [Edadul](https://github.com/Edadul)

## Licencia

Actualmente, este repositorio **no define una licencia** (`LICENSE` no presente). Si se planea su uso o distribución por terceros, se recomienda agregar una licencia explícita.
