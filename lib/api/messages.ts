"use client";
import { toast } from "react-toastify";
import { GET, POST } from "./client";
import { ApiEndpoints } from "./api-endpoints";
import { Message } from "../types";

export interface UserData {
  id?: number;
  username: string;
  email: string;
  isAuthenticated?: boolean;
}

export const loginUserQQQQQQAPI = async (
  payload: UserData
): Promise<UserData | null> => {
  try {
    const response = await POST(ApiEndpoints.LOGIN_USER, payload);

    if (response.ok) {
      toast.success("user successfully logged in");
      return response.data.user;
    }
    toast.error(`Error: ${response.message}`);
    return null;
  } catch (error) {
    toast(`Error: ${error}`);
    return null;
  }
};

export const getMessagesAPI = async (
  chatId: number
): Promise<Message | null> => {
  try {
    const response = await GET(ApiEndpoints.MESSAGES(String(chatId)));
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
