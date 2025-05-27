import axiosInstance from "../axiosInstance";

export const fetchProducts = async () => {
  const productsRes = await axiosInstance.get("/products");
  //   console.log("Products are", products);
  return productsRes.data;
};
