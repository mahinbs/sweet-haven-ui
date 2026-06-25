import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { checkIsAdmin, getSession, onAuthStateChange } from "@/services/auth";

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  isAdmin: false,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const resolveAdmin = async (nextSession: Session | null) => {
      if (!mounted) return;

      setSession(nextSession);

      if (nextSession?.user) {
        const admin = await checkIsAdmin(nextSession.user);
        if (mounted) setIsAdmin(admin);
      } else if (mounted) {
        setIsAdmin(false);
      }

      if (mounted) setLoading(false);
    };

    getSession().then(resolveAdmin);

    const subscription = onAuthStateChange((nextSession) => {
      setLoading(true);
      resolveAdmin(nextSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        isAdmin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
