import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { slugify } from "@/lib/price";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from "@/services/categories";
import type { Category } from "@/types/database";

const emptyForm = {
  slug: "",
  title: "",
  label: "",
  image: "",
  headline: "",
  description: "",
  filters: "",
  show_on_homepage: false,
  sort_order: 0,
};

export default function AdminCollections() {
  const queryClient = useQueryClient();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [form, setForm] = useState(emptyForm);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        slug: form.slug || slugify(form.title),
        title: form.title,
        label: form.label || null,
        image: form.image,
        headline: form.headline,
        description: form.description,
        filters: form.filters
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean),
        show_on_homepage: form.show_on_homepage,
        sort_order: form.sort_order,
      };

      if (editing) {
        return updateCategory(editing.id, payload);
      }
      return createCategory(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast({ title: editing ? "Collection updated" : "Collection created" });
      closeDialog();
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast({ title: "Collection deleted" });
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setOpen(true);
  };

  const openEdit = (category: Category) => {
    setEditing(category);
    setForm({
      slug: category.slug,
      title: category.title,
      label: category.label ?? "",
      image: category.image,
      headline: category.headline,
      description: category.description,
      filters: category.filters.join(", "),
      show_on_homepage: category.show_on_homepage,
      sort_order: category.sort_order,
    });
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setEditing(null);
    setForm(emptyForm);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Collections</h1>
          <p className="mt-1 text-sm text-slate-500">Manage product categories and collection pages.</p>
        </div>
        <Button onClick={openCreate} className="rounded-full bg-[#E93354] hover:bg-[#c72944]">
          <Plus className="mr-2 h-4 w-4" />
          Add Collection
        </Button>
      </div>

      {isLoading ? (
        <p className="mt-8 text-sm text-slate-500">Loading...</p>
      ) : (
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Title</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Slug</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Homepage</th>
                <th className="px-4 py-3 text-right font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium">{category.title}</td>
                  <td className="px-4 py-3 text-slate-500">{category.slug}</td>
                  <td className="px-4 py-3">{category.show_on_homepage ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(category)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (confirm(`Delete "${category.title}"? Products in this collection will also be deleted.`)) {
                          deleteMutation.mutate(category.id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                    No collections yet. Create your first one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Collection" : "New Collection"}</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveMutation.mutate();
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="auto-generated from title"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Label (homepage)</Label>
                <Input
                  value={form.label}
                  onChange={(e) => setForm({ ...form, label: e.target.value })}
                  placeholder="CAKES"
                />
              </div>
              <div className="space-y-2">
                <Label>Sort Order</Label>
                <Input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                required
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Headline</Label>
              <Input
                required
                value={form.headline}
                onChange={(e) => setForm({ ...form, headline: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                required
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Sub-filters (comma-separated)</Label>
              <Input
                value={form.filters}
                onChange={(e) => setForm({ ...form, filters: e.target.value })}
                placeholder="All Cakes, Layer Cakes, Cheesecakes"
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.show_on_homepage}
                onCheckedChange={(checked) => setForm({ ...form, show_on_homepage: checked })}
              />
              <Label>Show on homepage</Label>
            </div>
            <Button type="submit" disabled={saveMutation.isPending} className="w-full bg-[#E93354] hover:bg-[#c72944]">
              {saveMutation.isPending ? "Saving..." : editing ? "Update Collection" : "Create Collection"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
