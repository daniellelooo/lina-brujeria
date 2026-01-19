# Proyecto Lina - Servicios Místicos 🔮

Una página web moderna y elegante para ofrecer servicios de brujería, tarot y rituales místicos. Diseñada con una estética única usando tonos oscuros y púrpuras, alejándose del típico rojo y blanco.

## ✨ Características

- 🎨 **Diseño único**: Paleta de colores oscuros con púrpuras, violetas y toques dorados
- 📱 **Responsive**: Se adapta perfectamente a todos los dispositivos
- 🚀 **SEO Optimizado**: Meta tags, Schema.org, y Open Graph para mejor posicionamiento
- 💬 **WhatsApp directo**: Botón flotante y enlaces directos a WhatsApp
- ⚡ **Performance**: Construido con React y Vite para carga ultra rápida
- 🎭 **Animaciones**: Efectos sutiles y elegantes que mejoran la experiencia

## 🛠️ Stack Tecnológico

- **React 18**: Framework de UI
- **Vite**: Build tool ultra rápido
- **Tailwind CSS**: Estilos utility-first
- **React Helmet Async**: SEO y meta tags dinámicos

## 📦 Instalación

1. **Instalar dependencias**:

```bash
npm install
```

2. **Configurar WhatsApp**:
   - Abre `src/components/Hero.jsx`
   - Abre `src/components/Services.jsx`
   - Abre `src/components/WhatsAppButton.jsx`
   - Abre `src/components/Footer.jsx`
   - Reemplaza `tunumerodetelefono` con el número real (formato: código de país + número sin espacios ni símbolos)
   - Ejemplo: `573001234567` para Colombia

3. **Ejecutar en desarrollo**:

```bash
npm run dev
```

4. **Construir para producción**:

```bash
npm run build
```

## 📱 Configuración del Número de WhatsApp

El formato correcto del número es: `[código país][número]`

Ejemplos:

- Colombia: `573001234567`
- México: `525512345678`
- España: `34612345678`
- Argentina: `5491123456789`

**Archivos a modificar**:

1. `src/components/Hero.jsx` - Línea 3
2. `src/components/Services.jsx` - Línea 53
3. `src/components/WhatsAppButton.jsx` - Línea 7
4. `src/components/Footer.jsx` - Línea 52

## 🎨 Personalización

### Colores

Los colores se definen en `tailwind.config.js`. La paleta incluye:

- **mystic**: Tonos púrpuras/violetas (50-950)
- **dark**: Tonos oscuros para fondos (50-500)

### Servicios

Edita el array `services` en `src/components/Services.jsx` para:

- Agregar/quitar servicios
- Cambiar descripciones
- Modificar características

### Información Personal

En `src/components/About.jsx`:

- Cambia el nombre
- Actualiza la biografía
- Modifica la experiencia

## 📄 Estructura del Proyecto

```
ProyectoLina/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación superior
│   │   ├── Hero.jsx            # Sección principal/banner
│   │   ├── About.jsx           # Sobre mí
│   │   ├── Services.jsx        # Lista de servicios
│   │   ├── WhatsAppButton.jsx  # Botón flotante de WhatsApp
│   │   └── Footer.jsx          # Pie de página
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html                  # HTML base con SEO
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🔍 SEO

El proyecto incluye optimizaciones para SEO:

### Meta Tags

- Título descriptivo y optimizado
- Meta description con palabras clave
- Keywords relevantes
- Open Graph para redes sociales
- Twitter Cards

### Schema.org

Marcado estructurado como `ProfessionalService` para mejor indexación.

### Palabras Clave Principales

- brujería
- tarot
- limpias energéticas
- rituales
- magia
- espiritualidad
- consultas místicas

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages

```bash
npm run build
# Configura GitHub Pages para servir desde la carpeta 'dist'
```

## 📝 Notas Importantes

1. **Dominio**: Actualiza el canonical URL en `index.html` con tu dominio real
2. **Analytics**: Considera agregar Google Analytics para tracking
3. **Imágenes**: Agrega una imagen de perfil real en la sección "Sobre Mí"
4. **Favicon**: Reemplaza el favicon por defecto con uno personalizado
5. **Legal**: Considera agregar páginas de términos y privacidad

## 🎯 Características Destacadas

### Estética Única

- Alejada del típico rojo/blanco de páginas de brujería
- Colores oscuros sofisticados (púrpura, negro, dorado)
- Animaciones sutiles y profesionales
- Tipografía elegante (Cinzel + Inter)

### Experiencia de Usuario

- Navegación intuitiva
- Call-to-actions claros
- Información organizada
- Contacto fácil vía WhatsApp

### Performance

- Carga rápida
- Optimizado para móviles
- Imágenes y recursos minificados

## 📞 Soporte

Para dudas o modificaciones, revisa la documentación de:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 Licencia

Proyecto privado para uso comercial.

---

✨ **¡Éxito con tu página!** ✨
