import DialogComponent from "../components/Dialog";
import Link from "next/link";
import SheetComponent from "../components/SheetComponent";

import MenuBar from "../components/MenuBar";

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
        <MenuBar />
        <DialogComponent />
        <SheetComponent />
      </ul>
    </>
  );
}

export default HeaderLinks;
