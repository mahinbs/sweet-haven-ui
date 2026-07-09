import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Pencil, Plus, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { fetchCategories } from "@/services/categories";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
  uploadProductImage,
} from "@/services/products";
import type { ProductWithCategory } from "@/types/database";

const emptyForm = {
  category_id: "",
  name: "",
  description: "",
  image: "",
  price: "",
  filter_tag: "",
  featured: false,
};

export default function AdminProducts() {
  const queryClient = useQueryClient();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ProductWithCategory | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadProductImage(file);
      setForm((prev) => ({ ...prev, image: url }));
      toast({
        title: "Success",
        description: "Image uploaded successfully from device.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred while uploading.";
      toast({
        title: "Upload failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const selectedCategory = categories.find((c) => c.id === form.category_id);

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        category_id: form.category_id,
        name: form.name,
        description: form.description,
        image: form.image,
        price: form.price,
        price_value: 0,
        filter_tag: form.filter_tag || null,
        featured: form.featured,
      };

      if (editing) {
        return updateProduct(editing.id, payload);
      }
      return createProduct(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({ title: editing ? "Product updated" : "Product created" });
      closeDialog();
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({ title: "Product deleted" });
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm, category_id: categories[0]?.id ?? "" });
    setOpen(true);
  };

  const openEdit = (product: ProductWithCategory) => {
    setEditing(product);
    setForm({
      category_id: product.category_id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      filter_tag: product.filter_tag ?? "",
      featured: product.featured,
    });
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setEditing(null);
    setForm(emptyForm);
    setUploading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Products</h1>
          <p className="mt-1 text-sm text-slate-500">Manage all bakery products in the catalog.</p>
        </div>
        <Button onClick={openCreate} className="rounded-full bg-[#E93354] hover:bg-[#c72944]" disabled={categories.length === 0}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {categories.length === 0 && (
        <p className="mt-4 text-sm text-amber-600">Create a collection first before adding products.</p>
      )}

      {isLoading ? (
        <p className="mt-8 text-sm text-slate-500">Loading...</p>
      ) : (
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Name</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Collection</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Price</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Featured</th>
                <th className="px-4 py-3 text-right font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium">{product.name}</td>
                  <td className="px-4 py-3 text-slate-500">{product.category?.title}</td>
                  <td className="px-4 py-3 text-[#E93354]">{product.price}</td>
                  <td className="px-4 py-3">{product.featured ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(product)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (confirm(`Delete "${product.name}"?`)) {
                          deleteMutation.mutate(product.id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                    No products yet.
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
            <DialogTitle>{editing ? "Edit Product" : "New Product"}</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveMutation.mutate();
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label>Collection</Label>
              <Select value={form.category_id} onValueChange={(v) => setForm({ ...form, category_id: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select collection" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Name</Label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
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
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input
                  required
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="$48"
                />
              </div>
              <div className="space-y-2">
                <Label>Filter Tag</Label>
                <Select
                  value={form.filter_tag || "__none__"}
                  onValueChange={(v) => setForm({ ...form, filter_tag: v === "__none__" ? "" : v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Optional sub-filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="__none__">None</SelectItem>
                    {(selectedCategory?.filters ?? []).map((f) => (
                      <SelectItem key={f} value={f}>
                        {f}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Product Image</Label>
              <div className="flex flex-col gap-3 rounded-lg border border-dashed border-slate-200 p-4">
                {form.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-slate-50">
                    <img src={form.image} alt="Preview" className="h-full w-full object-contain" />
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, image: "" })}
                      className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white hover:bg-red-600 focus:outline-none"
                      title="Remove image"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  <Label
                    htmlFor="image-upload"
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-[#E93354]" />
                        <span>Uploading image...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 text-[#E93354]" />
                        <span>Upload image from device</span>
                      </>
                    )}
                  </Label>
                </div>
                <div className="relative flex items-center justify-center py-1">
                  <span className="bg-white px-2 text-xs text-slate-400">OR</span>
                  <div className="absolute inset-0 -z-10 flex items-center">
                    <div className="w-full border-t border-slate-100" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500">Or paste a direct image URL:</span>
                  <Input
                    required
                    placeholder="https://example.com/image.jpg"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.featured}
                onCheckedChange={(checked) => setForm({ ...form, featured: checked })}
              />
              <Label>Featured product</Label>
            </div>
            <Button type="submit" disabled={saveMutation.isPending || uploading} className="w-full bg-[#E93354] hover:bg-[#c72944]">
              {saveMutation.isPending ? "Saving..." : uploading ? "Uploading image..." : editing ? "Update Product" : "Create Product"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
