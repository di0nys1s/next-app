"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Loading from "./loading";

const NavBar = () => {
  const { status, data: session } = useSession();

  const handleAddStatus = () => {
    switch (status) {
      case "loading":
        return <Loading size="md" />;
      case "authenticated":
        return <li>{session.user?.name}</li>;
      case "unauthenticated":
        return (
          <li>
            <Link href="/api/auth/signin">Login</Link>
          </li>
        );
      default:
        break;
    }
  };

  return (
    <nav className="flex justify-between bg-blue-200 p-4 mb-4">
      <Image src="/next.svg" alt="logo" priority width={75} height={75} />
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        {handleAddStatus()}
      </ul>
    </nav>
  );
};

export default NavBar;
