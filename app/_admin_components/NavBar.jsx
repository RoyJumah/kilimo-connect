import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserAvatar from "../_features/authentication/userAvatar";
import SearchBar from "../_ui/SearchBar";
import { useLogout } from "../_features/authentication/useLogout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../_features/authentication/useUser";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function AdminNavBar() {
  const { logout, isLoading } = useLogout();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const { user } = useUser();
  console.log({ user });
  const userId = user?.id;
  const router = useRouter();
  function handleLogout() {
    logout();
    router.push("/");
  }
  return (
    <div className="flex justify-between px-[40px] py-[12px]">
      <div></div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <Popover>
          <PopoverTrigger>
            <UserAvatar />
          </PopoverTrigger>
          <PopoverContent className="w-[150px] p-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href={`/profile/${userId}`} legacyBehavior>
                <a className="text-sm font-semibold tracking-wide text-stone-700">
                  Profile
                </a>
              </Link>

              <button
                type="button"
                disabled={isLoading}
                onClick={handleLogout}
                className="border-none text-sm font-semibold tracking-wide text-red-600"
              >
                Sign Out
              </button>
            </div>
          </PopoverContent>
        </Popover>
        <button
          type="button"
          onClick={toggleDarkMode}
          className="border-none text-sm font-semibold tracking-wide"
        >
          {darkMode ? (
            <MdDarkMode size={22} color="#3b3e1f" />
          ) : (
            <MdOutlineLightMode size={22} color="#3b3e1f" />
          )}
        </button>
      </div>
    </div>
  );
}
