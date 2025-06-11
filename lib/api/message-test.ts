import { toast } from "react-toastify";
import { GET } from "./client";
import { ApiEndpoints } from "./api-endpoints";

export interface IGameItem {
  id: number;
  text: string;
  link: string;
}

export interface ICheckoutResponse {
  ok: boolean;
  data: IGameItem[];
}

interface IGame {
  game_id: number;
  start_at: string;
  title: string;
  zoom_link: string;
}

export const getPlayLive = async (): Promise<ICheckoutResponse> => {
  try {
    const response = await GET(ApiEndpoints.ACCOUNT_DETAILS);
    if (response.ok) {
      return {
        ok: true,
        data: response.data?.games,
      };
    } else {
      return {
        ok: false,
        data: [],
      };
    }
  } catch (error) {
    toast.error(`Error fetching checkout order: ${error}`);
    return {
      ok: false,
      data: [],
    };
  }
};

export const getTestApi = async (): Promise<IGame | null> => {
  try {
    const response = await GET(ApiEndpoints.APPLY_COUPON);
    if (response.ok) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    toast.error(`Error fetching checkout order: ${error}`);
    return null;
  }
};
