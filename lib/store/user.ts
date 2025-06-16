import { create } from "zustand";
import { userStorageHelper } from "../utils";

interface User {
  id: number | null;
  username: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => {
  const defaultUser = {
    id: userStorageHelper.getUser()?.id || null,
    username: "",
    email: "",
  };

  return {
    user: defaultUser,
    setUser: (user) => {
      if (user) {
        userStorageHelper.setUser({
          id: user.id || null,
          username: user.username,
          email: user.email,
        });
      }

      return set({ user });
    },
    logout: () => {
      userStorageHelper.removeUser();
      return set({
        user: {
          id: null,
          username: "",
          email: "",
        },
      });
    },
  };
});
