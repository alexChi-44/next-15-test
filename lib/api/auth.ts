"use client";
import { toast } from "react-toastify";
import { POST } from "./client";
import { ApiEndpoints } from "./api-endpoints";

export interface UserData {
  id?: number;
  username: string;
  email: string;
  isAuthenticated?: boolean;
}

export const registerUserAPI = async (
  payload: UserData
): Promise<UserData | null> => {
  try {
    const response = await POST(ApiEndpoints.REGISTER, payload);

    if (response.ok) {
      toast.success(`User created !`);
      return response.data.user;
    }
    toast.error(`Error: ${response.message}`);
    return null;
  } catch (error) {
    toast(`Error: ${error}`);
    return null;
  }
};

export const loginUserAPI = async (
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
