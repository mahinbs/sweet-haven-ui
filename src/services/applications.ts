import { supabase } from "@/lib/supabase";
import type { JobApplication, JobApplicationInsert } from "@/types/database";

export async function fetchApplications(): Promise<JobApplication[]> {
  const { data, error } = await supabase
    .from("job_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as JobApplication[];
}

export async function submitApplication(
  application: JobApplicationInsert,
): Promise<JobApplication> {
  const { data, error } = await supabase
    .from("job_applications")
    .insert(application)
    .select()
    .single();

  if (error) throw error;
  return data as JobApplication;
}

export async function uploadResume(file: File): Promise<string> {
  const ext = file.name.split(".").pop() ?? "pdf";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("resumes").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from("resumes").getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteApplication(id: string): Promise<void> {
  const { error } = await supabase.from("job_applications").delete().eq("id", id);
  if (error) throw error;
}
