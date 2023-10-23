"use client";

import React from "react";
import { useGetProducts } from "../../hooks";

interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  const { data } = useGetProducts();
  return (
    <div>
      {slug} {sortOrder}
      <ul>
        {data?.map((product) => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
