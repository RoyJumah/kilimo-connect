import DialogComponent from "../_components/Dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import SheetComponent from "../_components/SheetComponent";

import MenuBar from "../_components/MenuBar";
import UserAvatar from "../_features/authentication/userAvatar";
import { motion } from "framer-motion";
import Modal from "../_components/Modal";
import { useUser } from "../_features/authentication/useUser";
import { useLogout } from "../_features/authentication/useLogout";
import { useRouter } from "next/navigation";

function HeaderLinks() {
  const router = useRouter();
  const { user } = useUser();
  const userId = user?.id;

  const { logout, isLoading } = useLogout();
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/agritourism", label: "Agritourism" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ];

  function handleLogout() {
    logout();
    router.push("/");
  }

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

        {user && userId ? (
          <Popover>
            <PopoverTrigger>
              <UserAvatar />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col items-center justify-center gap-4">
                <Link href={`/profile/${userId}`} legacyBehavior>
                  <a className="text-lg font-semibold tracking-wide text-stone-700">
                    Profile
                  </a>
                </Link>
                <Link href={`/orders/`} legacyBehavior>
                  <a className="text-lg font-semibold tracking-wide text-stone-700">
                    Orders
                  </a>
                </Link>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleLogout}
                  className="border-none text-lg font-semibold tracking-wide text-red-600"
                >
                  Sign Out
                </button>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          // Render the avatar if the user is logged in
          <Dialog>
            <DialogTrigger>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden cursor-pointer rounded-2xl bg-[#9da452] px-3 py-1 text-[16px] font-semibold tracking-wide  text-white  sm:block"
              >
                Login
              </motion.div>
            </DialogTrigger>
            <DialogContent>
              <Modal />
            </DialogContent>
          </Dialog>
        )}
      </ul>
    </>
  );
}

export default HeaderLinks;
