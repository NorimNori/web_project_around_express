# Around the U.S. - Backend API 🌎

## Descripción del Proyecto

Around the U.S. Backend es una API RESTful desarrollada como parte del programa TripleTen en el curso de Introducción a Backend con Node.js y Express. Este proyecto proporciona los servicios de backend para la aplicación "Alrededor de los EE. UU.", permitiendo gestionar usuarios y tarjetas de lugares.

La API actualmente soporta operaciones de lectura (GET) para usuarios y tarjetas, con manejo apropiado de errores para recursos no encontrados.

## Funcionalidad

### Endpoints Disponibles

**Usuarios:**
- `GET /users` - Obtiene la lista completa de usuarios
- `GET /users/:userId` - Obtiene un usuario específico por ID

**Tarjetas:**
- `GET /cards` - Obtiene la lista completa de tarjetas

**Manejo de Errores:**
- Devuelve código de estado 404 y mensaje JSON para IDs de usuario inexistentes
- Devuelve código de estado 404 para rutas no existentes

### Respuestas de la API

**Éxito (200):**
```json
[
  {
    "_id": "5d8b8592978f8bd833ca8133",
    "name": "Elise Bouer",
    "about": "Fotógrafa profesional",
    "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/..."
  }
]
```

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
- **JSON** - Almacenamiento temporal de datos

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
├── app.js              # Punto de entrada de la aplicación
├── routes/
│   ├── users.js        # Rutas de usuarios
│   └── cards.js        # Rutas de tarjetas
├── data/
│   ├── users.json      # Datos de usuarios
│   └── cards.json      # Datos de tarjetas
├── package.json
└── README.md
```

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

## Próximas Funcionalidades

En futuras actualizaciones me gustaría implementar:
- Operaciones POST, PATCH y DELETE
- Conexión a base de datos (MongoDB)
- Autenticación y autorización de usuarios
- Validación de datos con middleware
- Gestión de likes en tarjetas

## Autor

Desarrollado como parte del bootcamp de TripleTen - Proyecto 16

---

&copy; 2026 Around the U.S. Backend API
