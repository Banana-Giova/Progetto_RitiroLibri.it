# RitiroLibri.it

> **RitiroLibri.it** è una moderna landing page sviluppata con Next.js, pensata per offrire un servizio di ritiro gratuito di libri usati a domicilio. Questo repository contiene l’intero frontend, responsive e accessibile, completo di sezione Hero, “Come funziona?”, contatti, form di richiesta e tutte le pagine legali (Cookie Policy, Privacy Policy, Note Legali).

---

## 📂 Struttura del progetto

```
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── progetto_ritirolibri.it
├── public
├── README.md
├── src
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── components
│   │   ├── CookieConsentBanner.js
│   │   ├── Footer.js
│   │   ├── Form.js
│   │   ├── Hero.js
│   │   ├── layout.js
│   │   └── ui
│   │       ├── BackToTopButton.js
│   │       ├── button.js
│   │       ├── Navbar.js
│   │       └── WhatsAppButton.js
│   ├── pages
│   │   ├── about.js
│   │   ├── _app.js
│   │   ├── come_funziona.js
│   │   ├── contact.js
│   │   ├── cookie-policy.js
│   │   ├── _document.js
│   │   ├── index.js
│   │   ├── note-legali.js
│   │   ├── privacy-policy.js
│   │   └── termini-e-condizioni.js
│   └── styles
│       └── globals.css
└── tailwind.config.js

```

---

## 🚀 Caratteristiche principali

- **Next.js** con Pages Router
- **Navbar** accessibile, mobile-first, menu a hamburger con animazione dolce
- **Hero Section** con headline animata, CTA e visual
- **“Perché Sceglierci”**: 3 card con icone modulabili (HeroUI / Lucide)
- **Sezione “Come funziona?”**: 3 step illustrati + FAQ interattiva
- **Contact Form** fisso nel footer, invia via `mailto:` a `ritirolibri@esempio.it`
- **Cookie Banner** persistente in `localStorage`, fade-out al click
- **Integrazioni**:
  - Google Analytics 4 (`NEXT_PUBLIC_GA4_ID`)
  - Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`)
- **Componenti riutilizzabili**: Button, Card, Divider, Back-to-Top

---

## 🛠️ Tecnologie e dipendenze

- **Framework**: [Next.js](https://nextjs.org/)
- **Librerie UI**:  
  – [Lucide React](https://lucide.dev/) per le icone  
  – [Heroui Spacer](https://github.com/hero-ui/xyz) per spaziature fluide
- **Styling**: CSS puro, struttura mobile-first con media query
- **Analytics & Tracking**:  
  – Google Analytics 4  
  – Facebook Meta Pixel

---

## 💻 Setup & sviluppo

1. **Clona il repository**  
   ```bash
   git clone https://github.com/Banana-Giova/Progetto_RitiroLibri.it.git
   cd Progetto_RitiroLibri.it
   ```

2. **Installa le dipendenze**  
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. **Configura le variabili d’ambiente**  
   Crea un file `.env.local` in root inserendo i tuoi dati:
   ```env
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=1234567890
   ```

4. **Avvia il server di sviluppo**  
   ```bash
   npm run dev
   # → http://localhost:3000
   ```

5. **Build & Preview**  
   ```bash
   npm run build
   npm run start
   ```

---

## 📐 Stili e layout

Tutto il CSS vive in `styles/globals.css`, organizzato in sezioni:

- **Reset & Base**
- **Hero / Cards / Bottoni**
- **Navbar / Mobile menu**
- **Footer & Form**
- **Pagine Legali & FAQ**
- **Responsive (mobile / tablet / desktop)**

Puoi riutilizzare classi come `.feature-card`, `.contact-card`, `.divider`, `.back-to-top`, ecc.

---

## ☁️ Deployment

Consigli di deployment:

- **Vercel**: configurazione zero-config, anteprima CI/CD automatica
- **Netlify** o **Cloudflare Pages** funzionano altrettanto bene
- Verifica **Environment Variables** in produzione
- Controlla la cookie banner e lo script di analytics attivo solo in **afterInteractive**

---

## ✅ Testing e verifiche

- **Cross-browser**: Chrome / Firefox / Safari / Edge
- **Mobile-first**: Verificato su iOS/Android e tablet (≤768px, 769–1200px, >1200px)
- **Accessibilità**:  
  – `aria-label` su button hamburger  
  – colori contrastanti (WCAG AA)  
  – `lang="it"` e meta tag `<Head>`
- **Performance**: Lighthouse  
- **SEO**: Titoli, description, favicon, meta tags

---

**Licenza & Note**  
Questo progetto è rilasciato con licenza MIT.  
Per dettagli legali, fai riferimento alle pagine **Note Legali** e **Termini e Condizioni** integrate.

---blob/main/progetto_ritirolibri.it/src/styles/globals.css

⭐️ Se il progetto ti è piaciuto, lascia una stella su GitHub e condividilo con la community!
