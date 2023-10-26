"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaHome } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import { getProducts } from "@/services/apiProducts";

export default function SubMenu() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="flex items-center gap-6 text-xl font-semibold ">
        <NavigationMenuItem>
          <Link href="/">
            <FaHome size={20} color="#9da452" />
          </Link>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/discover"
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            Discover
          </Link>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/superfoods"
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            Superfoods
          </Link>
          <NavigationMenuContent></NavigationMenuContent>
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
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
