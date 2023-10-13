import React from "react";
import users from "../../data/users.json";
import Link from "next/link";
import { sort } from "fast-sort";

// interface User {
//   id: number;
//   name: string;
// }

interface Props {
  sortOrder: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  // const res = await fetch(process.env.API_URL + "/users");
  // const users: User[] = await res.json();
  // console.log({ users });

  const waitedUsers: User[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });

  const sortedUsers = sort(waitedUsers).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
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
        {sortedUsers.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
