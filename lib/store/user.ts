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
  setAuth: (isAuthenticated: boolean) => void;
  logout: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: null,
    name: '',
    email: '',
    isAuthenticated: false,
    avatarUrl: ''
  },
  setUser: (user) =>
    set((state) => ({
      user: { ...state.user, ...user },
    })),

  setAuth: (isAuthenticated) =>
    set((state) => ({
      user: { ...state.user, isAuthenticated },
    })),
    
  logout: () =>
    set({
      user: { id: null, avatarUrl: '', name: '', email: '', isAuthenticated: false },
    }),
}));