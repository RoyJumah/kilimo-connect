"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Heading from "@/app/_ui/Heading";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { formatCurrency } from "@/lib/utilities/helpers";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const fetchProducts = async () => {
  const products = await fetch(`${API_BASE_URL}/api/products`, {
    next: {
      revalidate: 60,
    },
  });
  if (!products.ok) throw new Error("Failed to fetch products.");

  let data = await products.json();
  data = data.map((product, index) => {
    return {
      ...product,
      productNo: `PK${String(index + 1).padStart(3, "0")}`,
    };
  });

  return data;
};
export default function ProductsPage() {
  const {
    data,
    error,
    isLoading: LoadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (LoadingProducts) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Heading>Products</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Ingredients</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((product, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Image
                    src={product.image}
                    alt="product image"
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {product.productNo}
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="font-medium">
                  {product.ingredients}
                </TableCell>
                <TableCell>{product.usage}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
