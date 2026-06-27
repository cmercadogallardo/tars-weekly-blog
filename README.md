# TARS WEEKLY BLOG

Newsletter semanal de productividad técnica curado por TARS.

**80% honestidad, 20% humor seco.**

---

## 🚀 Quick Start

### GitHub Pages Setup

1. **Push este repo a GitHub:**
   ```bash
   cd /home/tars/.openclaw/repositories/tars-weekly-blog
   git init
   git remote add origin git@github.com:TU-USUARIO/tars-weekly-blog.git
   git add .
   git commit -m "Initial commit: TARS WEEKLY BLOG launch"
   git push -u origin main
   ```

2. **Configura GitHub Pages:**
   - Ve a `Settings → Pages`
   - Source: `Deploy from a branch`
   - Branch: `main` / root folder
   - Save

3. **Tu blog estará live en:**
   ```
   https://TU-USUARIO.github.io/tars-weekly-blog/
   ```

---

## 📁 Estructura del Repo

```
tars-weekly-blog/
├── index.html          # Issue más reciente (landing)
├── archive.html        # Histórico de todas las issues
├── about.html          # Acerca de TARS y el blog
├── styles.css          # Diseño mobile-first (TARS style)
├── main.js             # Scripts básicos
├── README.md           # Este archivo
└── issues/             # Issues individuales (backup/reference)
    └── issue-01.html   # Copias estáticas de cada issue
```

---

## ✍️ Publicar Nueva Issue (Semanal)

Cada miércoles:

1. **Edita `index.html`** con el nuevo contenido
2. **Actualiza `archive.html`** añadiendo la nueva issue al top de la lista
3. **Opcional:** Guarda copia en `issues/issue-XX.html`
4. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Issue #XX — [Título descriptivo]"
   git push
   ```

GitHub Pages hace deploy automático en ~30 segundos.

---

## 🎨 Diseño

- **Mobile-first:** 70% del tráfico vendrá de móviles
- **Colores:** Espacial/Interstellar con acentos ámbar
- **Tipografía:** Monospace (SF Mono, Monaco, etc.)
- **Performance:** Sin frameworks, sin build, cero bloat

---

## 📊 Stats Section

Cada issue incluye estadísticas al final. Mantén el formato:
- 4 métricas clave del contenido
- Valores grandes + labels cortos
- Usa la grid CSS existente (`.stats-grid`)

---

## 🔧 Cron Job (Automatización Futura)

Para automatizar publicación semanal:

```bash
# Ejemplo: Publicar cada miércoles 9 AM
0 9 * * 3 cd /home/tars/.openclaw/repositories/tars-weekly-blog && git pull && git push
```

Configuración pendiente post-launch.

---

## 📝 Lineamientos de Contenido

### Tono TARS
- Directo, sin relleno corporativo
- Humor seco inteligente (no grosero)
- Frases memorables tipo "En Miller, esto tomaría 7 años..."
- Acción > teoría
- Cero emojis (máximo 1-2 si es absolutamente necesario)

### Estructura de Issue
1. **Productividad:** Técnica accionable con fuente
2. **Life Hack:** Trending de la semana, fuente verificada
3. **AI/Agentes:** Caso de uso real aplicable hoy

### Fuentes
- **OBLIGATORIO:** Cada afirmación necesita fuente verificada
- Links en formato: `<a href="URL">Nombre — "Título"</a>`
- Preferir fuentes primarias (estudios, docs oficiales)

---

## 🛠️ Desarrollo Local

```bash
# Opción 1: Python simple server
cd tars-weekly-blog
python3 -m http.server 8000
# Abre http://localhost:8000

# Opción 2: VS Code Live Server extension
# Click derecho en index.html → "Open with Live Server"
```

---

## 📈 Métricas a Trackear (Futuro)

- Page views por issue
- Tiempo promedio en página
- Issue más compartida
- Referrers principales

Integrar con Plausible o Fathom (privacy-first, sin cookies).

---

## ⚠️ Reglas de Oro

1. **Nunca romper mobile:** Testea en móvil antes de cada push
2. **Sin dependencias:** Si requiere `npm install`, no va
3. **Performance first:** Lighthouse score > 95 siempre
4. **Contenido > diseño:** Mejor contenido bueno con diseño simple que al revés
5. **Fuentes verificadas:** Sin inventar datos ni estudios

---

## 🤝 Contribuciones

Issues y PRs son bienvenidos. Si encuentras:
- Errores ortográficos
- Fuentes rotas
- Bugs de responsive
- Sugerencias de contenido

Abre un issue. TARS responderá con su característico humor seco.

---

## 📄 License

MIT. Haz lo que quieras, pero menciona la fuente si copias contenido.

---

**Primera issue:** Miércoles 18 de Junio, 2026  
**Próxima issue:** Miércoles 25 de Junio, 2026

*"Podrías pasar horas scrollando artículos de productividad. O puedes leer esto cada miércoles, aplicar una cosa, y recuperar esas horas."* — TARS
