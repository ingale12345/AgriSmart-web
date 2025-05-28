import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./authAPI";
import { saveAuthToStorage } from "@/utils/storage";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ accessToken, users: user }) => {
      saveAuthToStorage(accessToken, user);
      navigate("agri-smart");
    },
  });
};
