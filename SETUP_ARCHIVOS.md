# 📁 Agregar Archivos Personales

Para completar tu portfolio, necesitas agregar estos archivos en la carpeta **`public/`**:

## 1. Foto de Perfil
- **Ubicación**: `public/profile.jpg` o `public/profile.png`
- **Tamaño recomendado**: 200x200px - 500x500px
- **Formato**: JPG, PNG (preferiblemente cuadrado)
- **El archivo se referencia en**: `src/data/curriculum.json` → `profile.image`

Ejemplo:
```json
"image": "/profile.jpg"
```

## 2. PDF del Currículum
- **Ubicación**: `public/cv_matias_morales.pdf`
- **El archivo se referencia en**: `src/data/curriculum.json` → `profile.cvPdf`

Ejemplo:
```json
"cvPdf": "/cv_matias_morales.pdf"
```

## 3. Editar datos en JSON

Abre **`src/data/curriculum.json`** para personalizar:
- ✏️ Nombre, título, ubicación
- 🔗 Links a redes sociales
- 💼 Experiencia laboral
- 🛠️ Skills
- 🎓 Educación

**No necesitas tocar el código**, solo edita el JSON!

## 📝 Ejemplo de estructura esperada:

```
proyecto/
├── public/
│   ├── profile.jpg              ← Tu foto aquí
│   └── cv_matias_morales.pdf    ← Tu CV aquí
├── src/
│   └── data/
│       └── curriculum.json      ← Edita los datos aquí
└── ...
```

## 🚀 Después de agregar archivos:

1. Coloca los archivos en `public/`
2. Actualiza los nombres en `curriculum.json` si es necesario
3. `npm run build` para compilar
4. Haz git push para que GitHub Actions publique los cambios
