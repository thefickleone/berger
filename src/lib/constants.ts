import { ProductItem } from "@/types/product";

export const BUSINESS = {
  name: "Firdous Gallery",
  city: "Jatra",
  district: "Birbhum",
  state: "West Bengal",
  country: "India",
  phoneDisplay: "+91 99999 99999",
  whatsappNumber: "919999999999",
  instagramUrl: "https://www.instagram.com/bergerpaintsindia",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Jatra%2C%20Birbhum%2C%20West%20Bengal&output=embed",
};

export const BEFORE_AFTER_ITEMS = [
  {
    title: "Living Room Refresh",
    before: "/gallery-before-1.svg",
    after: "/gallery-after-1.svg",
  },
  {
    title: "Exterior Facade Upgrade",
    before: "/gallery-before-2.svg",
    after: "/gallery-after-2.svg",
  },
  {
    title: "Bedroom Accent Wall",
    before: "/gallery-before-3.svg",
    after: "/gallery-after-3.svg",
  },
] as const;

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    category: "interior paints",
    name: "Silk Luxury Interior Range",
    description: "Premium interior finish options for rich color depth and long-lasting elegance.",
    badge: "Premium",
  },
  {
    category: "exterior paints",
    name: "Weather Shield Exterior Range",
    description: "Exterior solutions made for Indian climate with UV and moisture resistance.",
    badge: "Durable",
  },
  {
    category: "primers",
    name: "Surface-Ready Primers",
    description: "Reliable base coats to improve paint bonding, coverage, and finish consistency.",
    badge: "Essential",
  },
  {
    category: "waterproofing",
    name: "Home Waterproofing Systems",
    description: "Targeted protection for terrace, walls, and damp-prone zones.",
    badge: "Protection",
  },
];

