export interface Category {
  id: string;
  slug: string;
  title: string;
  label: string | null;
  image: string;
  headline: string;
  description: string;
  filters: string[];
  show_on_homepage: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  price_value: number;
  filter_tag: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductWithCategory extends Product {
  category: Pick<Category, "id" | "slug" | "title">;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string | null;
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume_url: string | null;
  resume_link: string | null;
  created_at: string;
}

export type CategoryInsert = Omit<Category, "id" | "created_at" | "updated_at">;
export type CategoryUpdate = Partial<CategoryInsert>;

export type ProductInsert = Omit<Product, "id" | "created_at" | "updated_at">;
export type ProductUpdate = Partial<ProductInsert>;

export type JobInsert = Omit<Job, "id" | "created_at" | "updated_at">;
export type JobUpdate = Partial<JobInsert>;

export type JobApplicationInsert = Omit<JobApplication, "id" | "created_at">;
