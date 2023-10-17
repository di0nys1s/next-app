import { Employee } from "@/app/types";
import { useMutation, QueryClient } from "@tanstack/react-query";

type Error = {
  message: string;
};

const createEmployee = async (newEmployee: Employee): Promise<Employee> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL not defined");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create employee");
  }

  return await response.json();
};

export const useCreateEmployee = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (input: Employee) => createEmployee(input),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });
};
