"use client";

import React from "react";
import Link from "next/link";
import Loading from "../loading";
import { useGetEmployees } from "../hooks";
import { sort } from "fast-sort";
import { Employee } from "../types";

interface Props {
  sortOrder: string;
}

const UserTable = ({ sortOrder }: Props) => {
  const { data, isLoading, error } = useGetEmployees();

  const sortedData = sort(data as Employee[]).asc(
    sortOrder === "email"
      ? (employee) => employee.email
      : (employee) => employee.name
  );

  if (error) return <div>Error: {error.message}</div>;

  return isLoading ? (
    <Loading />
  ) : (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(({ _id, name, email }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
