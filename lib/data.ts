/* Contenu — La Barcarola, trattoria franco-italienne à Asnières-sur-Seine.
   Refonte concept (proposition indépendante). La carte ci-dessous est une
   reconstitution plausible : l'établissement et ses infos pratiques sont réels,
   le détail des plats est une démonstration. */

export type DietTag = "Végétarien" | "Vegan" | "Halal";

export type Dish = {
  id: string;
  category: "Antipasti" | "Pizze" | "Pasta" | "Secondi" | "Dolci" | "Cave & boissons";
  name: string;
  desc: string;
  price: number;
  tags: DietTag[];
  signature?: boolean;
};

export const categories = [
  "Antipasti",
  "Pizze",
  "Pasta",
  "Secondi",
  "Dolci",
  "Cave & boissons",
] as const;
export const dietTags: DietTag[] = ["Végétarien", "Vegan", "Halal"];

export const menu: Dish[] = [
  // Antipasti
  {
    id: "a1",
    category: "Antipasti",
    name: "Burrata Pugliese",
    desc: "Burrata crémeuse des Pouilles, tomates confites, basilic, huile d'olive vierge.",
    price: 12,
    tags: ["Végétarien"],
    signature: true,
  },
  {
    id: "a2",
    category: "Antipasti",
    name: "Vitello tonnato",
    desc: "Fines tranches de veau, crème onctueuse au thon, câpres et roquette.",
    price: 13,
    tags: [],
  },
  {
    id: "a3",
    category: "Antipasti",
    name: "Caprese di bufala",
    desc: "Mozzarella di bufala, tomates de saison, basilic, fleur de sel.",
    price: 11,
    tags: ["Végétarien"],
  },
  {
    id: "a4",
    category: "Antipasti",
    name: "Bruschette al pomodoro",
    desc: "Pain grillé frotté à l'ail, tomates fraîches, origan, huile d'olive.",
    price: 8,
    tags: ["Végétarien", "Vegan"],
  },
  {
    id: "a5",
    category: "Antipasti",
    name: "Antipasto della casa",
    desc: "Assortiment de charcuteries italiennes et légumes grillés marinés.",
    price: 14,
    tags: [],
  },

  // Pizze
  {
    id: "z1",
    category: "Pizze",
    name: "Margherita D.O.P.",
    desc: "Tomate San Marzano, mozzarella fior di latte, basilic frais.",
    price: 13,
    tags: ["Végétarien"],
    signature: true,
  },
  {
    id: "z2",
    category: "Pizze",
    name: "Diavola",
    desc: "Tomate, mozzarella, spianata piccante, un soupçon de piment.",
    price: 16,
    tags: [],
  },
  {
    id: "z3",
    category: "Pizze",
    name: "Quattro Formaggi",
    desc: "Mozzarella, gorgonzola, parmesan, pecorino, filet de miel.",
    price: 16,
    tags: ["Végétarien"],
  },
  {
    id: "z4",
    category: "Pizze",
    name: "Vegetariana",
    desc: "Tomate, mozzarella, légumes grillés du marché, roquette.",
    price: 15,
    tags: ["Végétarien"],
  },
  {
    id: "z5",
    category: "Pizze",
    name: "Pollo & verdure",
    desc: "Tomate, mozzarella, poulet mariné halal, poivrons, oignons doux.",
    price: 16,
    tags: ["Halal"],
  },

  // Pasta
  {
    id: "p1",
    category: "Pasta",
    name: "Spaghetti alle Vongole",
    desc: "Palourdes, ail, persil plat, vin blanc, huile d'olive.",
    price: 18,
    tags: [],
    signature: true,
  },
  {
    id: "p2",
    category: "Pasta",
    name: "Tagliatelle al Ragù",
    desc: "Pâtes fraîches maison, ragù de bœuf mijoté, parmesan affiné.",
    price: 16,
    tags: ["Halal"],
  },
  {
    id: "p3",
    category: "Pasta",
    name: "Penne all'Arrabbiata",
    desc: "Tomate, ail, piment, persil — relevée comme à Rome.",
    price: 14,
    tags: ["Végétarien", "Vegan"],
  },
  {
    id: "p4",
    category: "Pasta",
    name: "Risotto ai Funghi",
    desc: "Riz carnaroli crémeux, champignons poêlés, parmesan, huile de truffe.",
    price: 17,
    tags: ["Végétarien"],
  },
  {
    id: "p5",
    category: "Pasta",
    name: "Lasagne della Nonna",
    desc: "Lasagnes maison gratinées, sauce tomate longuement mijotée, béchamel.",
    price: 16,
    tags: [],
  },

  // Secondi
  {
    id: "s1",
    category: "Secondi",
    name: "Escalope Milanese",
    desc: "Escalope panée dorée, spaghetti à la tomate fraîche, citron.",
    price: 18,
    tags: ["Halal"],
    signature: true,
  },
  {
    id: "s2",
    category: "Secondi",
    name: "Saltimbocca alla Romana",
    desc: "Veau, sauge, jambon de Parme, jus au marsala, pommes grenaille.",
    price: 19,
    tags: [],
  },
  {
    id: "s3",
    category: "Secondi",
    name: "Filet de dorade",
    desc: "Dorade poêlée, légumes méditerranéens rôtis, huile d'olive citronnée.",
    price: 20,
    tags: [],
  },
  {
    id: "s4",
    category: "Secondi",
    name: "Pollo alla Cacciatora",
    desc: "Poulet halal mijoté tomate, olives, herbes, polenta crémeuse.",
    price: 18,
    tags: ["Halal"],
  },

  // Dolci
  {
    id: "d1",
    category: "Dolci",
    name: "Tiramisù della Casa",
    desc: "Mascarpone, café serré, biscuits imbibés, cacao amer.",
    price: 8,
    tags: ["Végétarien"],
    signature: true,
  },
  {
    id: "d2",
    category: "Dolci",
    name: "Panna Cotta",
    desc: "Crème vanillée fondante, coulis de fruits rouges maison.",
    price: 7,
    tags: ["Végétarien"],
  },
  {
    id: "d3",
    category: "Dolci",
    name: "Tarte au citron meringuée",
    desc: "Un clin d'œil français : citron de Menton, meringue légère.",
    price: 7,
    tags: ["Végétarien"],
  },
  {
    id: "d4",
    category: "Dolci",
    name: "Sorbets & glaces maison",
    desc: "Trois parfums au choix, sorbets aux fruits de saison.",
    price: 6,
    tags: ["Végétarien", "Vegan"],
  },

  // Cave & boissons
  {
    id: "c1",
    category: "Cave & boissons",
    name: "Chianti Classico (verre)",
    desc: "Rouge toscan, sur le fruit et les épices — l'accord pasta par excellence.",
    price: 6,
    tags: ["Vegan"],
  },
  {
    id: "c2",
    category: "Cave & boissons",
    name: "Pinot Grigio (verre)",
    desc: "Blanc vif et floral, parfait sur le poisson et les antipasti.",
    price: 6,
    tags: ["Vegan"],
  },
  {
    id: "c3",
    category: "Cave & boissons",
    name: "Aperol Spritz",
    desc: "Aperol, prosecco, eau pétillante, tranche d'orange. L'apéritif.",
    price: 8,
    tags: ["Vegan"],
  },
  {
    id: "c4",
    category: "Cave & boissons",
    name: "Limonata maison",
    desc: "Citron pressé, infusion maison, sans alcool.",
    price: 5,
    tags: ["Vegan"],
  },
  {
    id: "c5",
    category: "Cave & boissons",
    name: "Caffè & cantuccini",
    desc: "Ristretto serré, petits biscuits aux amandes.",
    price: 4,
    tags: ["Végétarien"],
  },
];

export const chef = {
  name: "Said Nasry",
  role: "Aux fourneaux, depuis le premier jour",
  bio: "La Barcarola, c'est une cuisine franco-italienne faite maison : pâtes fraîches, pizze au four, et l'envie de recevoir comme à la maison. Des produits simples, bien choisis, des options halal et végétariennes, et un accueil de quartier — celui qui vous fait revenir.",
};

export const ambiance = [
  "La salle",
  "La terrasse climatisée",
  "Le four à pizza",
  "Les pâtes fraîches",
  "Le comptoir",
  "Le dressage",
];

export const hours: { day: string; value: string }[] = [
  { day: "Lun — Mer", value: "11h30–14h30 · 19h–22h30" },
  { day: "Jeudi", value: "11h30–14h30 · 19h–23h" },
  { day: "Vendredi", value: "11h–15h · 19h–22h30" },
  { day: "Sam — Dim", value: "19h–22h30" },
];

export type Review = { name: string; text: string; source: string };
export const reviews: Review[] = [
  {
    name: "Karim B.",
    text: "Parmi les meilleures pizzas d'Asnières : pâte fine, garniture généreuse. Accueil adorable, on se sent comme chez soi.",
    source: "Google",
  },
  {
    name: "Sophie & Marc",
    text: "Pâtes fraîches excellentes et service aux petits soins, même un vendredi plein à craquer. On revient toujours.",
    source: "TheFork",
  },
  {
    name: "Léa D.",
    text: "Terrasse agréable, cuisine maison et addition raisonnable. La vraie cantine italienne de quartier.",
    source: "Google",
  },
];

export const resto = {
  name: "La Barcarola",
  tagline: "Trattoria franco-italienne",
  baseline: "Cucina fatta in casa, à Asnières.",
  address: "1 rue Eugénie Eboué, 92600 Asnières-sur-Seine",
  phone: "01 40 86 24 32",
  area: "Asnières-sur-Seine",
};
