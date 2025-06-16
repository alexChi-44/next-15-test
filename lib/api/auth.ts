"use client";
import { toast } from "react-toastify";
import { GET, POST } from "./client";
import { ApiEndpoints } from "./api-endpoints";

export interface UserData {
  id: number | null;
  username: string;
  email: string;
}

export interface RegisterUserData {
  username: string;
  password: string;
  email: string;
}

export const registerUserAPI = async (
  payload: RegisterUserData
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
  payload: RegisterUserData
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

export const getUserAPI = async (): Promise<UserData | null> => {
  try {
    const response = await GET(ApiEndpoints.USER);
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
