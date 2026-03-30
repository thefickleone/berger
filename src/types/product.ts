export type ProductCategory =
  | "interior paints"
  | "exterior paints"
  | "primers"
  | "waterproofing";

export type ProductItem = {
  category: ProductCategory;
  name: string;
  description: string;
  badge: string;
};

