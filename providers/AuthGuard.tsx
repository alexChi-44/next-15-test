"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/user";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  // const {
  //   user: { isAuthenticated },
  //   setAuth,
  // } = useUserStore();
  const isAuthenticated = false;
  const setAuth = () => {};
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      const item = sessionStorage.getItem("ST_app_auth");
      const data = item ? JSON.parse(item) : null;
      if (data) {
        setAuth(true);
        router.replace("/");
      }
      // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router, setAuth]);

  //   if (!isAuth) {
  //     return null; // Or a loading spinner
  //   }

  return <>{children}</>;
}
