# Curriculum Interactivo - TypeScript Configuration

## Configuración de TypeScript

Este proyecto utiliza TypeScript con las siguientes características:

### Archivos de Configuración

- `tsconfig.json` - Configuración principal del compilador TypeScript
- `tsconfig.node.json` - Configuración para archivos de configuración de Vite

### Características Habilitadas

- ✅ Strict mode activado
- ✅ Módulos ESNext
- ✅ Type checking en tiempo de compilación
- ✅ Soporte para Vue 3 SFC (Single File Components)
- ✅ Soporte para TypeScript en comentarios JSDoc

## Scripts de Compilación

```bash
# Compilar y verificar tipos sin generar output
npm run build

# El comando build incluye: vue-tsc --noEmit && vite build
```

## Next Steps

1. Instalar dependencias: `npm install`
2. Iniciar servidor: `npm run dev`
3. Abrir http://localhost:5173 en el navegador
