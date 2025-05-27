import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./products.api";

export const useGetProducts = () => {
  return useQuery({ queryKey: ["get-products"], queryFn: fetchProducts });
};
