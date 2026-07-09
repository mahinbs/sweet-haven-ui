import { supabase } from "@/lib/supabase";
import type { Category, CategoryInsert, CategoryUpdate } from "@/types/database";

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data ?? []).map(normalizeCategory);
}

export async function fetchHomepageCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("show_on_homepage", true)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return (data ?? []).map(normalizeCategory);
}

export async function fetchCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data ? normalizeCategory(data) : null;
}

export async function createCategory(category: CategoryInsert): Promise<Category> {
  const { data, error } = await supabase.from("categories").insert(category).select().single();
  if (error) throw error;
  return normalizeCategory(data);
}

export async function updateCategory(id: string, updates: CategoryUpdate): Promise<Category> {
  const { data, error } = await supabase
    .from("categories")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return normalizeCategory(data);
}

export async function deleteCategory(id: string): Promise<void> {
  const { error } = await supabase.from("categories").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadCollectionImage(file: File): Promise<string> {
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
  const { error } = await supabase.storage.from("collection-images").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from("collection-images").getPublicUrl(path);
  return data.publicUrl;
}


function normalizeCategory(row: Record<string, unknown>): Category {
  return {
    ...(row as Category),
    filters: Array.isArray(row.filters) ? (row.filters as string[]) : [],
  };
}
