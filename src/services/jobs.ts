import { supabase } from "@/lib/supabase";
import type { Job, JobInsert, JobUpdate } from "@/types/database";

export async function fetchJobs(activeOnly = true): Promise<Job[]> {
  let query = supabase.from("jobs").select("*").order("sort_order", { ascending: true });

  if (activeOnly) {
    query = query.eq("is_active", true);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map(normalizeJob);
}

export async function fetchJobBySlug(slug: string): Promise<Job | null> {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data ? normalizeJob(data) : null;
}

export async function createJob(job: JobInsert): Promise<Job> {
  const { data, error } = await supabase.from("jobs").insert(job).select().single();
  if (error) throw error;
  return normalizeJob(data);
}

export async function updateJob(id: string, updates: JobUpdate): Promise<Job> {
  const { data, error } = await supabase.from("jobs").update(updates).eq("id", id).select().single();
  if (error) throw error;
  return normalizeJob(data);
}

export async function deleteJob(id: string): Promise<void> {
  const { error } = await supabase.from("jobs").delete().eq("id", id);
  if (error) throw error;
}

function normalizeJob(row: Record<string, unknown>): Job {
  return {
    ...(row as Job),
    requirements: Array.isArray(row.requirements) ? (row.requirements as string[]) : [],
  };
}
