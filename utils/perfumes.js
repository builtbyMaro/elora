const Fragrances = [
  {
    id: 1,
    name: "Aurea",
    HomepageDescription: "Luminous elegance, radiating refined warmth",
    description:
      "A luminous, sophisticated fragrance that radiates warmth and depth, perfect for special moments.",
    story:
      "We designed Aurea to bring a steady warmth and clarity to each moment, selecting notes that unfold in balance and intention. Subtle floral and amber tones were layered to support presence without demanding attention. With it, confidence settles quietly, and your presence carries a calm, deliberate energy that lingers without effort.",
    images: {
      image1: "aurea.jpg",
      image2: "aurea1.jpg",
      image3: "aurea2.jpg",
      image4: "aurea3.jpg",
    },
    details: {
      size: "100ml",
      fragrance: "Eau de Parfum",
      intensity: "luminous, sophisticated",
      notes: "Floral, Amber, Soft Vanilla",
      price: "300",
    },
  },
  {
    id: 2,
    name: "Obsidian",
    HomepageDescription: "Bold, deep, and magnetic",
    description:
      "A bold fragrance blending rich woods and subtle spices, leaving a confident, lasting impression.",
    story:
      "Obsidian was created to offer control rather than intensity, built from deeper notes that hold their ground without excess. Each layer was adjusted to feel steady and composed, allowing strength to register quietly instead of announcing itself. With it, your presence feels anchored and assured, leaving a trace that remains long after the moment has passed.",
    images: {
      image1: "obsidian.jpg",
      image2: "obsidian1.jpg",
      image3: "obsidian2.jpg",
    },
    details: {
      size: "100ml",
      fragrance: "Eau de Parfum",
      intensity: "bold, long-lasting",
      notes: "Woody, Spicy, Cedar",
      price: "250",
    },
  },
  {
    id: 3,
    name: "Liora",
    HomepageDescription: "Mysterious and alluring",
    description:
      "Deep and captivating, Liora balances rich exotic woods with soft floral hints.",
    story:
      "Liora is created with restraint, allowing each note to arrive with purpose instead of force. The balance is intentional, shaped to sit naturally on skin rather than announce itself. In your special moments, the scent settles in quietly, adding depth to how the moment feels without changing it. It stays close, becoming part of what makes the experience distinct and worth remembering.",
    images: {
      image1: "liora.jpg",
      image2: "liora1.jpg",
      image3: "liora2.jpg",
    },
    details: {
      size: "100ml",
      fragrance: "Eau de Parfum",
      intensity: "mysterious, alluring",
      notes: "Exotic Woods, Jasmine, Spices",
      price: "300",
    },
  },
  {
    id: 4,
    name: "Verdan",
    HomepageDescription: "Fresh and magnetic",
    description:
      "Green top notes evoke freshness, grounded by subtle woody undertones, leaving a confident, lasting impression.",
    story:
      "Verdan was developed to bring clarity and movement into balance, using fresh notes that feel grounded rather than sharp. The composition is refined to remain consistent throughout your day, adapting without losing its character. With it you move with a sense of ease, carrying a freshness that feels natural rather than performed.",
    images: {
      image1: "verdan.jpg",
      image2: "verdan1.jpg",
      image3: "verdan2.jpg",
    },
    details: {
      size: "100ml",
      fragrance: "Eau de Parfum",
      intensity: "fresh, long-lasting",
      notes: "Green, Woody, Herbaceous",
      price: "250",
    },
  },
  {
    id: 5,
    name: "Rosée",
    HomepageDescription: "Soft, delicate, and floral",
    description:
      "Soft yet captivating, Rosée envelops you in delicate floral elegance with a whisper of sensual charm.",
    story:
      "Rosée is created around attraction that feels natural rather than deliberate. It is built to draw people in without effort, staying close instead of reaching outward. The intention is to offer a scent that feels open and inviting, never sharp or distant. As it settles, it shapes how your interactions unfold, leaving a subtle trace that draws warmth and attention without demanding it.",
    images: {
      image1: "rosee.jpg",
      image2: "rosee1.jpg",
      image3: "rosee2.jpg",
    },
    details: {
      size: "100ml",
      fragrance: "Eau de Parfum",
      intensity: "soft, floral",
      notes: "Rose, Peony, Musk",
      price: "300",
    },
  },
];

export const getFragrances = () => {
  return Fragrances;
};

export const getFraganceId = (id) => {
  return Fragrances.find((fragrance) => fragrance.id === id);
};
