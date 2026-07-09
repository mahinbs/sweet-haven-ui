import { supabase } from "@/lib/supabase";
import { parsePrice } from "@/lib/price";
import type { Product, ProductInsert, ProductUpdate, ProductWithCategory } from "@/types/database";

export async function fetchProducts(): Promise<ProductWithCategory[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*, category:categories(id, slug, title)")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []).map(normalizeProduct);
}

export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", categoryId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as Product[];
}

export async function fetchProductById(id: string): Promise<ProductWithCategory | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*, category:categories(id, slug, title)")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data ? normalizeProduct(data) : null;
}

export async function createProduct(product: ProductInsert): Promise<Product> {
  const payload = {
    ...product,
    price_value: product.price_value ?? parsePrice(product.price),
  };

  const { data, error } = await supabase.from("products").insert(payload).select().single();
  if (error) throw error;
  return data as Product;
}

export async function updateProduct(id: string, updates: ProductUpdate): Promise<Product> {
  const payload = {
    ...updates,
    ...(updates.price !== undefined ? { price_value: parsePrice(updates.price) } : {}),
  };

  const { data, error } = await supabase
    .from("products")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Product;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadProductImage(file: File): Promise<string> {
  const maxSize = 5 * 1024 * 1024; // 5MB limit
  if (file.size > maxSize) {
    throw new Error("File size exceeds 5MB limit.");
  }

  const allowedExtensions = ["png", "jpg", "jpeg", "gif", "webp"];
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExtensions.includes(ext)) {
    throw new Error("Invalid file type. Only PNG, JPG, JPEG, GIF, and WEBP files are allowed.");
  }

  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("product-images").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from("product-images").getPublicUrl(path);
  return data.publicUrl;
}


function normalizeProduct(row: Record<string, unknown>): ProductWithCategory {
  const { category, ...product } = row;
  return {
    ...(product as Product),
    category: category as ProductWithCategory["category"],
  };
}
