"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  const products = await fetch("http://localhost:3000/api/products");
  if (!products.ok) throw new Error("Failed to fetch products");
  const data = await products.json();
  return data;
};

export default function SubMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="flex items-center gap-6 text-xl font-semibold ">
        <NavigationMenuItem>
          <Link href="/">
            <FaHome size={20} color="#9da452" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/agitourism"
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            Agritourism
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/"
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            Superfoods
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl font-semibold transition-all duration-100 hover:text-[#9da452]">
            <Link href="/products"> Products</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 text-sm font-semibold md:w-[500px] md:grid-cols-4 lg:w-[600px]  ">
              {products.map((product) => (
                <Link
                  href={`/products/${product.product_id}`}
                  key={product.product_id}
                  className="text-xs transition-all duration-100 hover:text-[#9da452]"
                >
                  {product.name}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/about"
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            About us
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
