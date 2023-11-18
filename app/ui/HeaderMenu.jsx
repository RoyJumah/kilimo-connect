import { GrCart } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
function HeaderLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/agritourism", label: "Agritourism" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ];

  return (
    <>
      <ul className="flex items-center gap-8 text-lg tracking-wide">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className="cursor-pointer font-semibold uppercase tracking-wide text-stone-700"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <GrCart
          size={24}
          color="#fff"
          className="inline-block cursor-pointer"
        />
        <IoSearchOutline size={24} className="inline-block cursor-pointer" />
        <CiMenuBurger size={24} className="inline-block cursor-pointer" />
      </ul>
    </>
  );
}

export default HeaderLinks;
