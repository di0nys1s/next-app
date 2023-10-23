import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {session && (
        <h1>
          Hello <span>{session.user!.name}</span>
        </h1>
      )}
      <Link className="btn btn-success mb-4" href="/users">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
