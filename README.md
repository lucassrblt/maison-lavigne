# La Barcarola — Refonte de site pour une trattoria

Refonte concept du site de **La Barcarola**, trattoria franco-italienne à Asnières-sur-Seine :
vitrine éditoriale avec **carte dynamique** et **réservation de table en ligne** — présentation de
la maison, carte filtrable par catégorie et par régime, ambiance, avis, et un module de réservation
(couverts → date → service midi/soir → créneau → confirmation).

> ⚠️ **Proposition indépendante.** Ce site est une **refonte concept**, non officielle et **sans
> affiliation** avec l'établissement. La Barcarola existe réellement (1 rue Eugénie Eboué, Asnières) ;
> les infos pratiques sont réelles, le détail de la carte est une reconstitution de démonstration, et
> aucune donnée n'est enregistrée. Objectif : montrer ce qu'une vraie vitrine apporterait face à la
> page METRO générique actuelle.

🔗 **Démo en ligne :** [la-barcarola.vercel.app](https://la-barcarola.vercel.app)

## Aperçu

- **Direction artistique** méditerranéenne chic : ivoire chaud, basilic profond, accent terracotta,
  touches d'olive et d'ocre. Display **Fraunces** (serif éditorial) × corps **Newsreader** — une
  identité distincte, sans cliché tricolore.
- **Carte dynamique** : filtres par catégorie (antipasti / pizze / pasta / secondi / dolci / cave)
  et par régime (végétarien, vegan, halal), avec compteurs en direct.
- **Réservation de table** : disponibilités calculées côté serveur selon le service (midi/soir,
  7j/7 — dîner seul le week-end) et le nombre de couverts.
- **100 % responsive**, animations au scroll, `prefers-reduced-motion` respecté.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Route handlers Node** (`/api/availability`, `/api/reservation`) + **Zod** pour la validation
- **next/font** (Google Fonts auto-hébergées)

## Architecture

```
app/
├── page.tsx              # Landing : hero, carte, maison, ambiance, réservation, avis
├── layout.tsx            # Fonts + métadonnées SEO/OpenGraph
├── globals.css           # Design system (tokens, textures, animations)
└── api/
    ├── availability/     # GET — créneaux par service selon date + couverts
    └── reservation/      # POST — validation Zod + référence de réservation
components/
├── Nav.tsx               # En-tête sticky + menu mobile
├── Menu.tsx              # Carte dynamique filtrable (client)
├── ReservationForm.tsx   # Réservation de table (client)
└── Reveal.tsx            # Apparition au scroll (IntersectionObserver)
lib/data.ts               # Contenu (carte, maison, ambiance, horaires, avis)
```

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Mise en production réelle

La carte et la réservation sont fonctionnelles mais ne persistent rien (démo). Pour une vraie
mise en ligne : gérer la carte via un CMS, brancher une base + un email de confirmation sur
`/api/reservation`, et synchroniser les disponibilités avec un vrai plan de salle. Remplacer aussi
les visuels (slots `dish-slot`) par de vraies photographies du restaurant et des plats.

---

Conçu & développé par [Lucas Rimbault](https://lucasrblt.me).
