import { useQuery } from "@tanstack/react-query";
import { Product } from "../../types";

const getProducts = async (): Promise<Product[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL not defined");
  }

  const response = await fetch(`${apiUrl}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};

export const useGetProducts = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { data, isLoading, error };
};
