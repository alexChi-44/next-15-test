"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/lib/store/user";
import { userStorageHelper } from "@/lib/utils";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // if (!user && storagedUser) {
    //   setUser(storagedUser);
    // }
    // if (user?.username === "name") {
    //   console.log("temp temp need load user create route", user);
    //   setUser(null);
    // }
  }, [user, router, pathname, setUser]);

  return <>{children}</>;
}
