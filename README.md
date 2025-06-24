# 🎬 Alta de Películas - React App

## 📌 Descripción

Aplicación web desarrollada en **React** que permite dar de alta películas mediante un formulario. Una vez cargadas, las películas se guardan en el **localStorage** y se muestran en pantalla utilizando componentes **Card**.

---

## 🧩 Funcionalidades

- 📄 Formulario con los siguientes campos:
  - **Nombre:** campo de texto para ingresar el título de la película.
  - **Descripción:** textarea para una breve sinopsis.
  - **Género:** select con opciones:
    - Comedia
    - Drama
    - Infantil

- ✅ Validación: Todos los campos son obligatorios.
- 💾 Al presionar el botón **Enviar**:
  - Se guarda la película en el `localStorage`.
  - Se muestra en una tarjeta (card) con su información.
- 🧹 Opcional: posibilidad de limpiar el formulario luego del envío.

---

## 📦 Tecnologías utilizadas

- **React**
- **React Bootstrap** o **CSS propio**
- **useState** y **useEffect**
- **LocalStorage** para persistencia

---

## 🗂️ Estructura sugerida

/src
/components
FormularioPelicula.jsx
CardPelicula.jsx
ListaPeliculas.jsx
App.jsx
index.js

yaml
Copiar
Editar

---

## ▶️ Cómo ejecutar el proyecto

1. Cloná este repositorio.
2. Ejecutá `npm install` para instalar las dependencias.
3. Iniciá la app con `npm start`.
4. Abrí el navegador en `http://localhost:3000`.

---

## 🎯 Objetivo educativo

Este proyecto permite practicar:

- Creación y reutilización de componentes en React.
- Manejo del estado con `useState`.
- Persistencia de datos con `localStorage`.
- Validación simple de formularios.
- Renderizado dinámico de listas con `.map()`.

---

## ✍️ Autor

**Juan Manuel Blanco**  
Proyecto de práctica - Alta de Películas con React

---

¡A registrar tus películas favoritas! 🍿