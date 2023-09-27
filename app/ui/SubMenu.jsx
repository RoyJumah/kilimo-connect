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
const components = [
  {
    id: "1",
    name: "Blueberries",
  },
  {
    id: "2",
    name: "Acerola",
  },
  {
    id: "3",
    name: "Spinach",
  },
  {
    id: "4",
    name: "Kale",
  },
  {
    id: "5",
    name: "Chia Seeds",
  },
  {
    id: "6",
    name: "Quinoa",
  },
  {
    id: "7",
    name: "Avocado",
  },
  {
    id: "8",
    name: "Salmon",
  },
  {
    id: "9",
    name: "Broccoli",
  },
  {
    id: "10",
    name: "Sweet Potatoes",
  },
  {
    id: "11",
    name: "Turmeric",
  },
  {
    id: "12",
    name: "Green Tea",
  },
  {
    id: "13",
    name: "Walnuts",
  },
  {
    id: "14",
    name: "Almonds",
  },
  {
    id: "15",
    name: "Cauliflower",
  },
  {
    id: "16",
    name: "Spirulina",
  },
  {
    id: "17",
    name: "Beets",
  },
  {
    id: "18",
    name: "Ginger",
  },
  {
    id: "19",
    name: "Garlic",
  },
  {
    id: "20",
    name: "Pomegranate",
  },
];

export default function SubMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-6 text-xl font-semibold ">
        <NavigationMenuItem>
          <Link href="/">
            <FaHome size={20} color="#9da452" />
          </Link>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href=""
            className="transition-all duration-100 hover:text-[#9da452]"
          >
            Discover
          </Link>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href=""
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
              {components.map((component) => (
                <li
                  key={component.id}
                  className="transition-all duration-100 hover:text-[#9da452] "
                >
                  {component.name}
                </li>
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
