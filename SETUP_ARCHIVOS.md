# 📁 Agregar Archivos Personales

Para completar tu portfolio, necesitas agregar estos archivos:

## 1. Foto de Perfil
- **Ubicación**: `public/profile.jpg` o `public/profile.png`
- **Tamaño recomendado**: 200x200px - 500x500px
- **Formato**: JPG, PNG (preferiblemente cuadrado)

## 2. PDF del Currículum
- **Ubicación**: `public/cv_matias_morales.pdf`

## 3. 🆕 Imágenes de Empresas (Experiencia Laboral)

Para cada empresa, necesitas **2 imágenes** en `public/jobs/`:

### Para Syndesis IT:
- **`syndesis-bg.jpg`** - Imagen de fondo (difuminada en el card)
  - Tamaño: 1200x600px o mayor
  - Formato: JPG
  - Se verá borrosa y oscura de fondo en el card
  
- **`syndesis-logo.png`** - Logo de la empresa (mostrado en modal)
  - Tamaño: 200x200px
  - Formato: PNG con fondo transparente (recomendado)
  - Se mostrará en el modal al hacer click

### Para IT Comahue:
- **`comahue-bg.jpg`** - Imagen de fondo
- **`comahue-logo.png`** - Logo de la empresa

### Para Eximo S.A.:
- **`eximo-bg.jpg`** - Imagen de fondo
- **`eximo-logo.png`** - Logo de la empresa

## 📂 Estructura esperada:

```
proyecto/
├── public/
│   ├── profile.jpg
│   ├── cv_matias_morales.pdf
│   └── jobs/
│       ├── syndesis-bg.jpg
│       ├── syndesis-logo.png
│       ├── comahue-bg.jpg
│       ├── comahue-logo.png
│       ├── eximo-bg.jpg
│       └── eximo-logo.png
└── src/
    └── data/
        └── curriculum.json   ← Edita aquí los datos
```

## 🎨 Consejos para las imágenes:

### Imágenes de Fondo (bg.jpg):
- Usar imágenes representativas de la empresa o industria
- Serán difuminadas (blur 8px) y oscurecidas (30% brightness)
- Pueden ser logos grandes, oficinas, o conceptos relacionados

### Logos (logo.png):
- Fondos transparentes para mejor apariencia
- Tamaño cuadrado o rectangular
- Si no tienes logo, puedes usar el nombre de la empresa con fuente grande

## 🔗 Links a Websites

El archivo `src/data/curriculum.json` ya tiene los websites de las empresas:
```json
{
  "id": 1,
  "company": "Syndesis IT",
  "website": "https://syndesisit.com",
  ...
}
```

Los links aparecerán en el modal con el icono 🔗 y permitirán abrir el sitio web.

## 📝 Después de agregar los archivos:

1. Coloca todas las imágenes en `public/jobs/`
2. Si deseas cambiar los links a websites, edita `src/data/curriculum.json`
3. Ejecuta: `npm run build`
4. Haz: `git add . && git commit -m "Add company images" && git push`
5. GitHub Actions hará el deploy automático

¡Listo! Cuando hagas push, tu portfolio se verá muy profesional con las imágenes de las empresas! 🚀
