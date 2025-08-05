# ¿Cuánto Falta? 🎉

<div align="center">

![¿Cuánto Falta?](https://img.shields.io/badge/¿Cuánto%20Falta?-Cuentas%20Regresivas-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-En%20Línea-success?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**La plataforma más precisa y confiable para cuentas regresivas en Chile y Latinoamérica**

[🌐 Ver Sitio Web](https://cuantofalta.cl/) • [📝 Documentación](#documentación) • [🚀 Contribuir](#contribuir)

</div>

---

## 📖 Descripción

**¿Cuánto Falta?** es una aplicación web moderna que permite a los usuarios crear y seguir cuentas regresivas precisas para eventos importantes, fechas especiales y momentos únicos en sus vidas. Desde celebraciones nacionales como las Fiestas Patrias hasta eventos personales como cumpleaños y aniversarios.

### ✨ Características Principales

- 🎯 **Cuentas regresivas precisas** hasta el segundo
- 🇨🇱 **Eventos chilenos populares** preconfigurados
- 📱 **Diseño completamente responsivo**
- ⚡ **Rendimiento optimizado** con Vanilla JavaScript
- 📝 **Blog educativo** con contenido de calidad
- 🔧 **Fácil personalización** y mantenimiento

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | Herramientas | Despliegue |
|----------|--------------|------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) |

</div>

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/Jcartagenac/cuantofaltahome.git

# Navegar al directorio
cd cuantofaltahome

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza el build de producción |

---

## 📁 Estructura del Proyecto

```
cuantofalta-vanilla/
├── 📁 public/
│   ├── _headers          # Configuración de headers para Cloudflare
│   ├── _redirects        # Configuración de redirects
│   └── favicon.ico       # Icono del sitio
├── 📁 src/
│   ├── main.js          # Lógica principal de la aplicación
│   └── style.css        # Estilos CSS
├── 📁 dist/             # Build de producción (generado)
├── index.html           # Página principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md           # Este archivo
```

---

## 🎨 Características del Sitio

### 🏠 Página Principal
- Cuenta regresiva principal para Año Nuevo
- Navegación intuitiva y moderna
- Diseño responsivo para todos los dispositivos

### 👥 Quiénes Somos
- Historia y misión de la empresa
- Valores corporativos: Comunidad, Pasión, Innovación, Precisión
- Información sobre el equipo chileno

### 🎉 Eventos Populares
- **Año Nuevo 2026**: Celebra la llegada del nuevo año
- **Día de San Valentín**: El día del amor y la amistad
- **Fiestas Patrias Chile**: Celebración de la independencia
- **Navidad 2025**: La celebración navideña

### 💬 Testimonios
- Testimonios reales de usuarios chilenos
- Experiencias auténticas de diferentes regiones

### ❓ Preguntas Frecuentes
- 6 preguntas detalladas con respuestas completas
- Información técnica sobre precisión y funcionalidades
- Guías de uso para dispositivos móviles

### 📝 Blog Educativo
1. **"Cómo Organizar el Evento Perfecto: Guía Completa 2025"** (8 min)
2. **"La Psicología de la Anticipación: Por Qué Contar los Días Nos Emociona"** (6 min)
3. **"Historia de las Celebraciones: Cómo Nacieron Nuestras Tradiciones Favoritas"** (7 min)
4. **"Tradiciones Chilenas: Celebraciones Únicas que Definen Nuestra Identidad"** (10 min)
5. **"Tecnología y Celebraciones: Cómo las Apps Transforman Nuestras Tradiciones"** (7 min)

### 📞 Contacto
- Formulario de contacto funcional
- Información de la empresa

---

## 🔧 Configuración de Despliegue

### Cloudflare Pages

El sitio está configurado para desplegarse automáticamente en Cloudflare Pages:

**Configuración de Build:**
- **Comando de construcción**: `npm install && npm run build`
- **Directorio de salida**: `dist`
- **Variables de entorno**: No requeridas

**Archivos de configuración:**
- `public/_headers`: Configuración de headers HTTP
- `public/_redirects`: Configuración de redirects y SPA routing

---

## 📊 Rendimiento y SEO

### Métricas de Rendimiento
- ⚡ **Tiempo de carga**: < 2 segundos
- 📦 **Tamaño del bundle**: ~40KB (comprimido)
- 🎯 **Lighthouse Score**: 95+ en todas las categorías

### Optimizaciones SEO
- 🏷️ Meta tags optimizados
- 📱 Diseño mobile-first
- ⚡ Carga rápida y optimizada
- 📝 Contenido estructurado y semántico
- 🔗 URLs amigables

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución

- Mantén el código limpio y bien documentado
- Sigue las convenciones de naming existentes
- Asegúrate de que el build pase sin errores
- Incluye tests si es necesario

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Equipo ¿Cuánto Falta?**
- 🌐 Sitio Web: [cuantofalta.cl](https://cuantofalta.cl/)
- 📧 Email: contacto@cuantofalta.cl
- 🇨🇱 Ubicación: Chile

---

## 🙏 Agradecimientos

- A la comunidad chilena por su apoyo constante
- A todos los usuarios que han confiado en nuestra plataforma
- A los desarrolladores que han contribuido al proyecto

---

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

[⬆ Volver arriba](#cuánto-falta-)

</div>

