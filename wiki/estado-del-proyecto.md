---
tipo: estado
estado: en-configuracion
creado: 2026-10-28
actualizado: 2026-10-28
tags: [proyecto, vite, react]
fuentes: ["proyecto/package.json", "proyecto/README.md", "mundo-color---detalles-con-amor (1).zip"]
---

# Estado del proyecto

## Página y versión local

- **Confirmado:** la copia extraída está en `proyecto/`. Es React 19, TypeScript 7, Vite 8 y Tailwind CSS 4; la página tiene catálogo, personalizador, ubicación y enlaces a WhatsApp.
- **Confirmado:** Node.js `v24.22.1`, npm `11.19.1` y Git `2.56.0.windows.2` están disponibles.
- **Confirmado:** el ZIP raíz se conserva intacto. La extracción se hizo dentro de `proyecto/` tras validar las rutas del archivo.
- **Hecho:** `npm install` terminó y generó `proyecto/package-lock.json`; la resolución actual instaló Vite 8.3.5 y `esbuild` 0.27.7. Se corrigió el conflicto original de `esbuild` 0.25.
- **Aviso:** npm reportó una vulnerabilidad de severidad baja y scripts de instalación de cuatro paquetes pendientes de aprobación. La compilación sí funcionó; revisar el aviso antes de publicar.

## Comprobaciones

- **Hecho:** inspección de archivos, framework, metadatos y scripts declarados.
- **Hecho:** revisión de instrucciones existentes; no había `AGENTS.md` ni wiki previos.
- **Hecho:** inspección visual de las fotos de productos, fachada, equipo, piezas de marca y horario.
- **Hecho:** `npm run build` compila correctamente; muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`.
- **Hecho:** `npm run lint` (`tsc --noEmit`) pasó.
- **Hecho:** vista previa en `http://127.0.0.1:3000/`; revisión visual a 1280×720 y 390×844. El ancho de documento móvil no desborda el viewport; el menú móvil abre y cierra.
- **Revisado, no enviado:** los enlaces principales apuntan al WhatsApp del negocio. No se abrió WhatsApp ni se envió un mensaje.

## Git y publicación

- **Confirmado:** Git está instalado; esta carpeta no era un repositorio al iniciar la tarea.
- **Hecho:** identidad local de Git configurada con el nombre `Digleines` y el correo `digleines@gmail.com`, proporcionados por la persona usuaria. La configuración global no se modificó.
- **Hecho:** repositorio local inicializado en la rama `main`; primer commit `87a35f1` (`Configura landing y wiki de Mundo Color`). `DOCS/`, los ZIP originales, secretos, dependencias y temporales están excluidos.
- **Confirmado:** no se encontró evidencia de una publicación ni se publicó nada en esta sesión.

## Siguiente paso

1. Elegir con la persona propietaria un cambio pequeño. Sugerencia registrada en [[pendientes]].
2. Resolver la discrepancia del horario antes de presentar el horario de la landing como confirmado.
