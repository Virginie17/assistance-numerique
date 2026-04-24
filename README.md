# Virginie Assistance Numérique

Landing page premium pour l'activité d'assistance numérique de Virginie, spécialisée dans l'accompagnement des seniors et des personnes en difficulté avec le numérique.

## 🎯 Projet

Site web moderne et responsive présentant les services d'assistance numérique :
- Démarches administratives (CAF, Impôts, Ameli, Retraite)
- Formation aux outils numériques (Smartphone, Tablette, Ordinateur)
- Accompagnement personnalisé et bienveillant
- Zone d'intervention : La Rochelle + 20km et à distance

## 🛠 Stack Technique

- **Frontend**: Next.js 16.2.4 avec App Router
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **Design**: Palette personnalisée (rose doux, bleu marine, beige, blanc)
- **SEO**: Optimisé pour le référencement local
- **Responsive**: Mobile-first design

## 🚀 Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone [repository-url]
cd virginie-assistance-numerique

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal avec SEO
│   └── page.tsx           # Page d'accueil
├── components/             # Composants React réutilisables
│   ├── Button.tsx         # Bouton personnalisé
│   ├── Card.tsx           # Carte générique
│   ├── Header.tsx         # Navigation
│   ├── HeroSection.tsx    # Section hero
│   ├── ServicesSection.tsx # Services
│   ├── AboutSection.tsx   # À propos
│   ├── TarifsSection.tsx  # Tarifs
│   ├── ZoneSection.tsx    # Zone d'intervention
│   ├── ContactSection.tsx # Contact
│   └── Footer.tsx         # Pied de page
├── public/                 # Fichiers statiques
│   ├── robots.txt         # SEO robots
│   └── sitemap.xml        # Sitemap
└── README.md              # Documentation
```

## 🎨 Design System

### Couleurs
- **Rose doux**: `#f8b4d9`
- **Bleu marine**: `#1e3a8a`
- **Beige**: `#f5e6d3`
- **Blanc**: `#ffffff`

### Typographie
- Font: Inter (Google Fonts)
- Hiérarchie claire pour l'accessibilité

### Composants
- Boutons avec animations et états hover
- Cartes avec effets d'élévation
- Navigation sticky avec scroll smooth
- Formulaires optimisés mobile

## 🔧 SEO Optimisation

### Métadonnées
- Titres et descriptions optimisés
- Open Graph et Twitter Cards
- Schema.org LocalBusiness
- Balises canoniques

### Fichiers SEO
- `robots.txt` configuré
- `sitemap.xml` automatique
- JSON-LD pour Google Business

### Performance
- Images optimisées
- Code split automatique
- CSS minimal

## 📱 Responsive

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Navigation adaptative
- Formulaires mobile-friendly

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
# Déployer sur Vercel
```

### Autres plateformes
Le projet est compatible avec :
- Netlify
- AWS Amplify
- Railway
- Tout hébergeur Node.js

## 📞 Contact

- **Email**: virginie.assistancenumerique@gmail.com
- **Instagram**: @virginie_assistance_numerique
- **Zone**: La Rochelle + 20km

## 📄 Licence

Projet privé - Virginie Assistance Numérique

---

**Développé avec ❤️ pour faciliter l'autonomie numérique**
