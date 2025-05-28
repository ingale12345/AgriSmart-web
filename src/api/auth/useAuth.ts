import { useState, useEffect } from "react";
import { getUserFromStorage, getTokenFromStorage } from "@/utils/storage";

export const useAuth = () => {
  const [user, setUser] = useState(() => getUserFromStorage());
  const [token, setToken] = useState(() => getTokenFromStorage());

  useEffect(() => {
    setUser(getUserFromStorage());
    setToken(getTokenFromStorage());
  }, []);

  return { user, token, isLoggedIn: !!token };
};
