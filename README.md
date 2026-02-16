# Around the U.S. - Backend API 🌎

## Descripción del Proyecto

**Around the U.S. Backend** es una API RESTful desarrollada como parte del programa TripleTen en el curso de Introducción a Backend con Node.js y Express.

Esta API proporciona los servicios de backend para la aplicación "Alrededor de los EE. UU.", permitiendo gestionar:

- Usuarios
- Tarjetas de lugares
- Likes en tarjetas
- Actualización de perfil y avatar

En este sprint el proyecto evolucionó de usar archivos JSON estáticos a utilizar **MongoDB con Mongoose**, incorporando operaciones completas CRUD y manejo avanzado de errores.

---

## 🚀 Funcionalidad

### 📌 Endpoints Disponibles

#### 👤 Usuarios

- `GET /users` → Obtiene todos los usuarios  
- `GET /users/:userId` → Obtiene un usuario por ID  
- `PATCH /users/me` → Actualiza nombre y descripción del usuario  
- `PATCH /users/me/avatar` → Actualiza el avatar del usuario  

#### 🗂 Tarjetas

- `GET /cards` → Obtiene todas las tarjetas  
- `POST /cards` → Crea una nueva tarjeta  
- `DELETE /cards/:cardId` → Elimina una tarjeta  
- `PUT /cards/:cardId/likes` → Da like a una tarjeta  
- `DELETE /cards/:cardId/likes` → Quita el like de una tarjeta  

---

## ❤️ Gestión de Likes

Para evitar que un usuario dé like más de una vez a la misma tarjeta, se utilizan operadores especiales de MongoDB:

- **`$addToSet`** → Agrega el ID del usuario solo si no existe en el array  
- **`$pull`** → Elimina el ID del usuario del array  

Ejemplo de implementación:

```js
Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true }
)


**Error 404 - Usuario no encontrado:**
```json
{
  "message": "ID de usuario no encontrado"
}
```

**Error 404 - Recurso no existente:**
```json
{
  "message": "Recurso solicitado no encontrado"
}
```

## Tecnologías y Técnicas Utilizadas

### Stack Tecnológico
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web minimalista para Node.js
- **MongoDB** – Base de datos NoSQL utilizada para almacenar usuarios y tarjetas.
- **MongoDB Compass** – Herramienta gráfica para visualizar y administrar la base de datos.
- **Mongoose** – ODM para modelar y gestionar datos en MongoDB desde Node.js.
- **JavaScript (ES6+)** – Lenguaje principal del proyecto para la lógica del servidor.

### Técnicas Implementadas
- **Arquitectura modular** - Separación de responsabilidades usando routers
- **Enrutamiento** - Gestión de rutas con Express Router
- **Middleware** - Uso de middleware para parsear JSON y manejar errores
- **Manejo de errores** - Implementación de respuestas HTTP apropiadas
- **Variables de entorno** - Configuración de puerto mediante `process.env`
- **Lectura de archivos JSON** - Carga de datos desde archivos estáticos

### Estructura del Proyecto
```
project-root/
├── app.js
├── controllers/
│   ├── users.js
│   └── cards.js
├── routes/
│   ├── users.js
│   └── cards.js
├── models/
│   ├── user.js
│   └── card.js
├── package.json
└── README.md


## Instalación y Uso

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor:
```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

### Pruebas con Postman

Puedes probar los siguientes endpoints:

- `GET http://localhost:3000/users`
- `GET http://localhost:3000/users/5d8b8592978f8bd833ca8133`
- `GET http://localhost:3000/cards`
- `GET http://localhost:3000/ruta-inexistente` (para probar el error 404)
- `GET    http://localhost:3000/users`
- `PATCH  http://localhost:3000/users/me`
- `POST   http://localhost:3000/cards`
- `PUT    http://localhost:3000/cards/:cardId/likes`
- `DELETE http://localhost:3000/cards/:cardId/likes`

## Próximas Funcionalidades

En futuras actualizaciones me gustaría implementar:
- Autenticación y autorización de usuarios
- Validación de datos con middleware
- Autenticación con JWT
- Autorización por propietario de tarjeta
- Validación avanzada con Celebrate/Joi
- Manejo centralizado de errores personalizados

## Autor

Desarrollado como parte del bootcamp de TripleTen - Proyecto 17

---

&copy; 2026 Around the U.S. Backend API
