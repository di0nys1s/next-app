"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Employee } from "../../types";
import { useCreateEmployee } from "../../hooks/employees";

const NewUserPage = () => {
  const createEmployeeMutation = useCreateEmployee();

  const [employee, setEmployee] = useState<Employee>({
    name: "",
    email: "",
  });

  const router = useRouter();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createEmployeeMutation.mutate(employee, {
      onSuccess: () => {
        alert("Employee created successfully");
        router.push("/users");
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control w-full mb-4 max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          className="input input-bordered w-full max-w-xs"
          onChange={handleFormInputChange}
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full max-w-xs"
          onChange={handleFormInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewUserPage;
