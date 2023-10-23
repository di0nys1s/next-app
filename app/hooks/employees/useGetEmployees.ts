import { useQuery } from "@tanstack/react-query";
import { Employee } from "../../types";

const getEmployees = async (): Promise<Employee[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL not defined");
  }

  const response = await fetch(`${apiUrl}/employees`);
  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }
  return await response.json();
};

export const useGetEmployees = () => {
  const { data, isLoading, error } = useQuery<Employee[], Error>({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  return { data, isLoading, error };
};
