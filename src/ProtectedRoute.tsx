import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./api/auth/useAuth";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate tosrc/pages/shops/api.ts replace />;
  }

  return <Outlet />;
}
