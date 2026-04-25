# Grand'ma Secrets — Landing Page

Site web vitrine pour la marque de cosmétique capillaire **Grand'ma Secrets**.

## Stack technique

| Outil | Rôle |
|---|---|
| [Vite](https://vitejs.dev) | Bundler & dev server |
| [React 18](https://react.dev) | UI framework |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling utilitaire |

---

## Installation & démarrage

### Prérequis
- **Node.js** ≥ 18 ([télécharger ici](https://nodejs.org))
- **npm** ≥ 9 (inclus avec Node.js)

### Étapes

```bash
# 1. Se placer dans le dossier du projet
cd grandma-secrets

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrir ensuite **http://localhost:5173** dans le navigateur.

---

## Scripts disponibles

```bash
npm run dev      # Serveur local avec hot-reload
npm run build    # Build de production (dossier /dist)
npm run preview  # Prévisualiser le build de production
```

---

## Structure du projet

```
grandma-secrets/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Point d'entrée React
    ├── App.jsx               # Composition des sections
    ├── index.css             # Styles globaux + animations
    ├── assets/
    │   └── images.js         # Images encodées en base64
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Strip.jsx
    │   ├── Products.jsx
    │   ├── Story.jsx
    │   ├── Testimonials.jsx
    │   ├── CTABanner.jsx
    │   ├── Footer.jsx
    │   └── GoldDivider.jsx
    ├── data/
    │   └── products.js       # Données produits & témoignages
    └── hooks/
        └── useInView.js      # Hook d'animation au scroll
```

---

## Personnalisation

### Changer les couleurs
Dans `tailwind.config.js` → section `theme.extend.colors` :
```js
brown:  '#583900',   // Brun principal
gold:   '#BF923F',   // Or / accent
nature: '#96A621',   // Vert nature
light:  '#F2F2F2',   // Fond clair
```

### Modifier les produits
Dans `src/data/products.js` → tableau `PRODUCTS`.

### Remplacer les photos
Dans `src/assets/images.js` — remplacer les chaînes base64 par de nouvelles images :
```js
// Option 1 : importer un fichier local
import heroImg from './hero.jpg'
export const HERO = heroImg

// Option 2 : utiliser une URL externe
export const HERO = 'https://exemple.com/photo.jpg'
```

### Numéro WhatsApp
Rechercher `wa.me/237677187674` dans tous les fichiers et remplacer par votre numéro.
