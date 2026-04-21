import { categories } from "@/data/categories";

export interface ProductItem {
  id: string;
  categorySlug: string;
  categoryTitle: string;
  name: string;
  description: string;
  image: string;
  price: string;
  priceValue: number;
}

const parsePrice = (value?: string) => {
  if (!value) {
    return 0;
  }

  const numeric = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const allProducts: ProductItem[] = categories.flatMap((category) =>
  category.products.map((product, index) => ({
    id: `${category.slug}-${index + 1}-${slugify(product.name)}`,
    categorySlug: category.slug,
    categoryTitle: category.title,
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price ?? "$0",
    priceValue: parsePrice(product.price),
  }))
);

export const productCategories = [
  { label: "All Categories", value: "all" },
  ...categories.map((category) => ({
    label: category.title,
    value: category.slug,
  })),
];
