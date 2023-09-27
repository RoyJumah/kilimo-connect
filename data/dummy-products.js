const BEST_SELLING_DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Cacao Butter",
    image: "/images/products/cacao-butter.webp",
  },
  {
    id: "p2",
    name: "Cacao Paste",
    image: "/images/products/cacao-paste.jpg",
  },
  {
    id: "p3",
    name: "Cacao Nibs",
    image: "/images/products/cacao-nibs.webp",
  },
  {
    id: "p4",
    name: "Tomatoes",
    image: "/images/products/tomatoes.webp",
  },
];

const FEATURED_DUMMY_PRODUCTS = [
  {
    id: "p5",
    name: "Hemp Protein",
    image: "/images/products/hemp-protein.webp",
  },
  {
    id: "p6",
    name: "Hemp Seeds",
    image: "/images/products/hemp-seeds.webp",
  },
  {
    id: "p7",
    name: "Organic Pollen",
    image: "/images/products/organic-pollen.webp",
  },

  {
    id: "p8",
    name: "Wheat Grass",
    image: "/images/products/wheat-grass.webp",
  },
];

export function getBestSellingProducts() {
  return BEST_SELLING_DUMMY_PRODUCTS;
}

export function getFeaturedProducts() {
  return FEATURED_DUMMY_PRODUCTS;
}
