import cakesImg from "@/assets/category-cakes.jpg";
import pastriesImg from "@/assets/category-pastries.jpg";
import breadImg from "@/assets/category-bread.jpg";
import cookiesImg from "@/assets/category-cookies.jpg";
import customImg from "@/assets/category-custom.jpg";
import macaronsImg from "@/assets/product-macarons.jpg";
import croissantImg from "@/assets/product-croissant.jpg";
import eclairImg from "@/assets/product-eclair.jpg";
import tartImg from "@/assets/product-tart.jpg";

export interface CategoryProduct {
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface CategoryContent {
  slug: string;
  title: string;
  image: string;
  headline: string;
  description: string;
  filters: string[];
  products: CategoryProduct[];
}

const createSamples = (baseItems: CategoryProduct[], total = 20): CategoryProduct[] => {
  const samples: CategoryProduct[] = [];

  for (let index = 0; index < total; index += 1) {
    const base = baseItems[index % baseItems.length];
    samples.push({
      ...base,
      name: `${base.name} ${index + 1}`,
    });
  }

  return samples;
};

const cakeProducts: CategoryProduct[] = [
  {
    name: "Midnight Ganache Cake",
    description: "Dark chocolate sponge layered with silky ganache and berry compote.",
    image: tartImg,
    price: "$48",
  },
  {
    name: "Strawberry Fields",
    description: "Vanilla chiffon with fresh strawberries and whipped mascarpone.",
    image: eclairImg,
    price: "$42",
  },
  {
    name: "Salted Caramel Crunch",
    description: "Buttery sponge, caramel mousse, and praline crunch topping.",
    image: croissantImg,
    price: "$46",
  },
  {
    name: "Celebration Rainbow Cake",
    description: "Six colorful layers with vanilla bean buttercream frosting.",
    image: macaronsImg,
    price: "$52",
  },
];

const pastryProducts: CategoryProduct[] = [
  {
    name: "Almond Croissant",
    description: "Twice-baked croissant filled with almond cream and toasted almonds.",
    image: croissantImg,
    price: "$5",
  },
  {
    name: "Vanilla Bean Éclair",
    description: "Choux pastry piped with vanilla custard and dipped in ganache.",
    image: eclairImg,
    price: "$6",
  },
  {
    name: "Berry Danish",
    description: "Laminated dough topped with mascarpone and seasonal berries.",
    image: tartImg,
    price: "$5",
  },
  {
    name: "Pistachio Swirl",
    description: "Buttery puff pastry rolled with pistachio praline filling.",
    image: macaronsImg,
    price: "$4",
  },
];

const breadProducts: CategoryProduct[] = [
  {
    name: "Country Sourdough",
    description: "Naturally leavened loaf with a caramelized crust and airy crumb.",
    image: breadImg,
    price: "$8",
  },
  {
    name: "Olive Fougasse",
    description: "Provençal-style flatbread studded with olives and herbs.",
    image: croissantImg,
    price: "$7",
  },
  {
    name: "Seeded Multigrain",
    description: "Packed with sunflower, flax, and sesame seeds for a hearty slice.",
    image: tartImg,
    price: "$9",
  },
  {
    name: "Classic Baguette",
    description: "Crisp exterior with a delicate, chewy interior—perfect for sharing.",
    image: eclairImg,
    price: "$4",
  },
];

const cookiesProducts: CategoryProduct[] = [
  {
    name: "Salted Chocolate Chunk",
    description: "Brown butter dough loaded with dark chocolate and flaky salt.",
    image: cookiesImg,
    price: "$3",
  },
  {
    name: "Raspberry Linzer",
    description: "Hazelnut shortbread filled with raspberry jam and dusted with sugar.",
    image: tartImg,
    price: "$3",
  },
  {
    name: "Espresso Swirl",
    description: "Mocha cookie with a ripple of espresso caramel.",
    image: croissantImg,
    price: "$3",
  },
  {
    name: "Lemon Shortbread",
    description: "Delicate, buttery rounds infused with Meyer lemon zest.",
    image: macaronsImg,
    price: "$3",
  },
];

const specialOrderProducts: CategoryProduct[] = [
  {
    name: "Signature Wedding Cake",
    description: "Tiered masterpiece customized with flavors, florals, and finishes.",
    image: tartImg,
    price: "From $320",
  },
  {
    name: "Corporate Dessert Box",
    description: "Assorted petite sweets branded to elevate client experiences.",
    image: macaronsImg,
    price: "From $96",
  },
  {
    name: "Festive Dessert Table",
    description: "Curated spread featuring tarts, mini cakes, and hand pies.",
    image: croissantImg,
    price: "From $240",
  },
  {
    name: "Custom Cookie Favors",
    description: "Hand-iced cookies packaged for events, gifts, or celebrations.",
    image: eclairImg,
    price: "From $68",
  },
];

const macaronProducts: CategoryProduct[] = [
  {
    name: "Signature Assortment",
    description: "Box of 12 featuring vanilla bean, pistachio, raspberry, and chocolate.",
    image: macaronsImg,
    price: "$24",
  },
  {
    name: "Citrus Collection",
    description: "Tangy trio with lemon curd, blood orange, and yuzu cream fillings.",
    image: tartImg,
    price: "$26",
  },
  {
    name: "Chocolate Lovers Box",
    description: "Valrhona dark, milk praline, and salted caramel macaron set.",
    image: eclairImg,
    price: "$26",
  },
  {
    name: "Rose & Lychee",
    description: "Fragrant rose ganache with a lychee center, dusted with petals.",
    image: croissantImg,
    price: "$28",
  },
];

export const categories: CategoryContent[] = [
  {
    slug: "cakes",
    title: "Cakes",
    image: cakesImg,
    headline: "We have a Cake for Every Celebration",
    description:
      "From classic vanilla sponges to decadent chocolate ganache, discover handcrafted cakes designed to make every occasion sweeter.",
    filters: ["All Cakes", "Layer Cakes", "Cheesecakes", "Cupcakes", "Celebration"],
    products: createSamples(cakeProducts),
  },
  {
    slug: "pastries",
    title: "Pastries",
    image: pastriesImg,
    headline: "Handcrafted Pastries Baked Fresh Daily",
    description:
      "Flaky, buttery, and made by hand—our pastry collection is inspired by Parisian bakeries and perfected in-house.",
    filters: ["All Pastries", "Croissants", "Puffs", "Danishes", "Seasonal"],
    products: createSamples(pastryProducts),
  },
  {
    slug: "bread",
    title: "Bread",
    image: breadImg,
    headline: "Artisan Bread with Heart and Heritage",
    description:
      "Slow-fermented loaves with a crisp crust and tender crumb, using locally milled flour and time-honored techniques.",
    filters: ["All Bread", "Sourdough", "Baguettes", "Whole Grain", "Specialty"],
    products: createSamples(breadProducts),
  },
  {
    slug: "cookies",
    title: "Cookies",
    image: cookiesImg,
    headline: "Small Treats with Big Flavor",
    description:
      "Chewy, crunchy, and everything in between—our cookies are baked in small batches throughout the day.",
    filters: ["All Cookies", "Chewy", "Crunchy", "Filled", "Seasonal"],
    products: createSamples(cookiesProducts),
  },
  {
    slug: "special-orders",
    title: "Special Orders",
    image: customImg,
    headline: "Custom Creations for Every Milestone",
    description:
      "Work one-on-one with our pastry chefs to design bespoke cakes, dessert tables, and corporate gifts.",
    filters: ["All Specialties", "Wedding", "Corporate", "Festive", "Gifting"],
    products: createSamples(specialOrderProducts),
  },
  {
    slug: "macarons",
    title: "Macarons",
    image: macaronsImg,
    headline: "Colorful Macarons Crafted with Precision",
    description:
      "Delicate almond shells filled with ganache, curd, or buttercream—each macaron is a bite-sized celebration.",
    filters: ["All Macarons", "Signature", "Seasonal", "Gift Boxes", "Limited Edition"],
    products: createSamples(macaronProducts),
  },
];

