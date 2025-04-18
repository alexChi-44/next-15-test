import { create } from 'zustand';

// Define the User interface
interface User {
  id: number | null;
  name: string;
  email: string;
  isAuthenticated: boolean;
  avatarUrl: string
}

// Define the Store interface
interface UserStore {
  user: User;
  setUser: (user: Partial<User>) => void;
  logout: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: null,
    name: '',
    email: '',
    isAuthenticated: true,
    avatarUrl: ''
  },
  setUser: (user) =>
    set((state) => ({
      user: { ...state.user, ...user },
    })),
  logout: () =>
    set({
      user: { id: null, avatarUrl: '', name: '', email: '', isAuthenticated: false },
    }),
}));