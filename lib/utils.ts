import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const userStorageHelper = {
  STORAGE_KEY: "telegramCloneUser",

  setUser(userData) {
    try {
      if (!userData || typeof userData !== "object") {
        throw new Error("Данные пользователя должны быть объектом");
      }
      const userToStore = {
        ...userData,
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userToStore));
      return userToStore;
    } catch (error) {
      console.error("Ошибка при сохранении пользователя:", error);
      return null;
    }
  },

  getUser() {
    try {
      const userData = localStorage.getItem(this.STORAGE_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Ошибка при чтении пользователя:", error);
      return null;
    }
  },

  updateUser(updates) {
    try {
      const currentUser = this.getUser();
      if (!currentUser) {
        throw new Error("Пользователь не найден");
      }
      const updatedUser = {
        ...currentUser,
        ...updates,
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      console.error("Ошибка при обновлении пользователя:", error);
      return null;
    }
  },

  removeUser() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      return true;
    } catch (error) {
      console.error("Ошибка при удалении пользователя:", error);
      return false;
    }
  },

  hasUser() {
    return !!this.getUser();
  },
};
