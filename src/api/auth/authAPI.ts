import type { AuthResponse, LoginPayload } from "@/types/auth";
import axiosInstance from "..";
import API_ROUTES from "../routes";

export const loginUser = async (payload: LoginPayload) => {
  const res: { data: AuthResponse } = await axiosInstance.post(
    API_ROUTES.AUTH.LOGIN,
    { ...payload, strategy: "local" }
  );
  return res.data;
};
