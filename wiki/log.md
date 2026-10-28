---
tipo: log
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [log, cronología]
fuentes: ["ZIP de AI Studio", "DOCS/", "instrucciones de la persona usuaria"]
---

# Registro

## [2026-10-28] inicio | configuración y revisión

- Localicé `mundo-color---detalles-con-amor (1).zip` y lo extraje de forma segura a `proyecto/`; se conserva el original.
- Verifiqué React 19, TypeScript 7, Vite 8, Node.js 24.22.1, npm 11.19.1 y Git 2.56.0.
- Revisé visualmente las fotos disponibles, piezas de marca y horario; el manual de identidad confirma la paleta y las tipografías.
- Catalogué los 18 archivos sueltos y los 19 miembros del ZIP de `DOCS/`; 14 miembros son duplicados binarios exactos y cinco solo están dentro del ZIP. No extraje duplicados.
- Confirmé datos de empresa desde el rótulo y la carta de presentación; detecté discrepancia de horarios y contenido web sin respaldo suficiente.
- `npm install` reveló incompatibilidad de `esbuild` 0.25 con Vite 8. Se cambió `esbuild` a `^0.27.0`; instalación y comprobaciones aún pendientes.
- No se realizó un cambio de diseño o contenido porque todavía no se solicitó uno. Ver [[pendientes]].

## [2026-10-28] verificación | instalación y vista previa

- `npm install` terminó y creó `proyecto/package-lock.json`; npm reportó una vulnerabilidad de severidad baja y cuatro scripts de instalación sin aprobación explícita.
- `npm run build` pasó en 47 segundos. Vite advirtió sobre `__dirname` en `vite.config.ts`; no impidió compilar.
- `npm run lint` pasó (`tsc --noEmit`).
- Abrí la página local en `http://127.0.0.1:3000/`, revisé la portada en escritorio y móvil, confirmé que no hay desbordamiento horizontal en 390 px y abrí/cerré el menú móvil.
- Revisé la dirección destino del enlace principal; no abrí WhatsApp ni envié mensajes.
- La carpeta no tenía identidad Git; no cambié la configuración global ni creé un commit sin nombre/correo. La versión local queda pendiente de esos datos.

## [2026-10-28] versionado | repositorio local

- Inicialicé Git en la carpeta de trabajo, rama `main`.
- Dejé preparados explícitamente `proyecto/`, `AGENTS.md`, `.gitignore` y `wiki/`; los documentos de `DOCS/` y ZIP originales quedan ignorados.
- En ese momento, el primer commit quedó pendiente de nombre y correo; el dato se resolvió en la entrada siguiente.

## [2026-10-28] versionado | primer commit local

- La persona usuaria proporcionó el nombre `Digleines` y el correo `digleines@gmail.com` para el autor de Git.
- Guardé esos datos únicamente en la configuración local del repositorio; no cambié la configuración global.
- Creé el primer commit `87a35f1` (`Configura landing y wiki de Mundo Color`) con la web extraída, instrucciones y wiki. Los originales de `DOCS/` y los ZIP permanecen excluidos.
- La compilación y lint ya se habían comprobado, y la vista previa local sigue disponible en `http://127.0.0.1:3000/`.
