import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/admin/AuthContext";
import { AdminLayout } from "@/admin/AdminLayout";

export function AdminRoute() {
  const { session, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4">
        <h1 className="text-xl font-semibold text-slate-900">Access Denied</h1>
        <p className="max-w-md text-center text-sm text-slate-600">
          Your account is not authorized for admin access. Ask an administrator to add your user ID to the
          admin_users table in Supabase.
        </p>
        <Navigate to="/admin/login" replace />
      </div>
    );
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
