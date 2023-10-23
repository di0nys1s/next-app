import { Product } from "@/app/types";
import { useMutation, QueryClient } from "@tanstack/react-query";

const createProduct = async (newProduct: Product): Promise<Product> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL not defined");
  }

  const response = await fetch(`${apiUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create product");
  }

  return await response.json();
};

export const useCreateProduct = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (input: Product) => createProduct(input),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};
