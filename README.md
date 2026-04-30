# 🌿 Naya Harmonie — Site React

Site vitrine pour Mariame Coulibaly, coach certifiée IPHM en sexothérapie, bien-être féminin et harmonie de couple.

## 🎨 Design

- **Stack** : React 18 + React Router 6 + Vite + Tailwind CSS
- **Icônes** : Lucide React
- **Polices** : Cormorant Garamond (serif), Inter (sans), Italianno (script)
- **Palette** : Sauge (vert) + Rose poudré + Ivoire + Bordeaux

## 📂 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero, piliers, approche, services, témoignages, CTA |
| `/boutique` | Boutique | 8 produits avec filtres, panier, commande WhatsApp |
| `/reservation` | Réservation | Wizard 4 étapes (type → profil → date → coordonnées) |
| `/blog` | Journal | 6 articles avec filtres et recherche |

## 🚀 Démarrer

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev
# → http://localhost:5173

# 3. Build pour production
npm run build

# 4. Prévisualiser le build
npm run preview
```

## 📁 Structure

```
naya-react/
├── public/
│   └── images/          ← Photos uploadées (coach.jpg, couple.jpg, profil.jpg)
├── src/
│   ├── components/
│   │   ├── Header.jsx       ← Navigation + menu mobile
│   │   ├── Footer.jsx       ← Footer avec liens et contacts
│   │   └── WhatsAppFloat.jsx
│   ├── pages/
│   │   ├── Home.jsx         ← Page d'accueil
│   │   ├── Boutique.jsx     ← Boutique avec panier
│   │   ├── Reservation.jsx  ← Wizard de réservation
│   │   └── Blog.jsx         ← Blog avec filtres
│   ├── App.jsx              ← Layout avec Outlet
│   ├── main.jsx             ← Point d'entrée + routing
│   └── index.css            ← Tailwind + styles globaux
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## ✨ Fonctionnalités UX

- **Reveal animations** au scroll (Intersection Observer)
- **Header sticky** avec changement de style au scroll
- **Menu mobile** plein écran avec animation slide
- **Wizard de réservation** 4 étapes avec progression visuelle
- **Filtres anti-homme-seul** dans la réservation
- **Panier de boutique** avec drawer latéral et commande WhatsApp directe
- **Filtres + recherche** sur boutique et blog
- **Bouton WhatsApp flottant** avec tooltip
- **Animations** : fade-up, slide-right, marquee, ken-burns
- **Accessibilité** : aria-labels, focus rings, contrast respecté

## 🖼️ Photos utilisées

Les photos sont dans `public/images/` :
- `coach.jpg` → Séances de coaching
- `couple.jpg` → Sections couple/intimité
- `profil.jpg` → Sections approche/bien-être féminin

Pour les remplacer, dépose simplement les nouvelles images au même nom dans `public/images/`.

## 🎯 Prochaines étapes

1. Backend de réservation (API + base de données)
2. Système de paiement (Stripe + Wave)
3. Back-office admin pour Mariame
4. CMS pour les articles de blog
5. SEO (sitemap, métadonnées)
6. Mise en ligne (Vercel)
