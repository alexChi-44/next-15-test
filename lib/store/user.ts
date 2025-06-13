import { create } from "zustand";
import { userStorageHelper } from "../utils";

interface User {
  id: number;
  username: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => {
  const defaultUser = userStorageHelper.getUser() || null;
  console.log(defaultUser, "storaged user");
  return {
    user: defaultUser,
    setUser: (user) => {
      userStorageHelper.setUser({
        ...user,
      });

      return set({ user });
    },
  };
});
