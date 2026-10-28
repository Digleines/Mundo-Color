---
tipo: decisiones
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [decisiones, proceso]
fuentes: ["instrucciones de la persona usuaria", "proyecto/package.json", "DOCS/"]
---

# Decisiones

## 2026-10-28 — Conservar el sitio existente

- **Decisión de la persona usuaria:** trabajar sobre la página descargada de Google AI Studio, respetando framework y organización salvo necesidad concreta.
- **Aplicación:** se conserva React/TypeScript/Vite y el ZIP original; la copia extraída está en `proyecto/`.

## 2026-10-28 — Proteger los originales y datos privados

- **Decisión de la persona usuaria:** `DOCS/` es la fuente original; no duplicar su contenido en `fuentes/`, no reescribir originales y mantener material privado fuera del repositorio compartido.
- **Aplicación:** el inventario registra los miembros del ZIP sin extraer duplicados; el `.gitignore` excluye `DOCS/` y los ZIP.

## 2026-10-28 — No convertir el contacto en automatización

- **Decisión de la persona usuaria:** WhatsApp debe seguir como canal directo; no crear bot.

## 2026-10-28 — Resolver incompatibilidad declarada

- **Decisión técnica:** cambiar solo la dependencia `esbuild` de `^0.25.0` a `^0.27.0`, porque Vite 8.3.5 rechaza la versión previa por incompatibilidad de peer dependency.
- **Estado:** cambio aplicado; falta confirmar instalación, compilación y lint.
