"use client";
import { toast } from "react-toastify";
import { GET } from "./client";
import { ApiEndpoints } from "./api-endpoints";

export interface UserData {
  id?: number;
  username: string;
  email: string;
  isAuthenticated?: boolean;
}

export const getChatsAPI = async (): Promise<UserData | null> => {
  try {
    const response = await GET(ApiEndpoints.CHATS);
    if (response.ok) {
      return response.data;
    }
    toast.error(`Error: ${response.message}`);
    return null;
  } catch (error) {
    toast(`Error: ${error}`);
    return null;
  }
};
