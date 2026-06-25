import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ExternalLink, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { deleteApplication, fetchApplications } from "@/services/applications";

export default function AdminApplications() {
  const queryClient = useQueryClient();
  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast({ title: "Application deleted" });
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Applications</h1>
        <p className="mt-1 text-sm text-slate-500">View career applications submitted from the website.</p>
      </div>

      {isLoading ? (
        <p className="mt-8 text-sm text-slate-500">Loading...</p>
      ) : (
        <div className="mt-8 space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{app.name}</h3>
                  <p className="text-sm text-slate-500">{app.email} · {app.phone}</p>
                  <p className="mt-1 text-sm font-medium text-[#E93354]">{app.position}</p>
                  <p className="mt-3 text-sm text-slate-600">{app.message}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {app.resume_url && (
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        Resume PDF <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {app.resume_link && (
                      <a
                        href={app.resume_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        Resume Link <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    {new Date(app.created_at).toLocaleString()}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (confirm("Delete this application?")) {
                      deleteMutation.mutate(app.id);
                    }
                  }}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
          {applications.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-500">No applications yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
