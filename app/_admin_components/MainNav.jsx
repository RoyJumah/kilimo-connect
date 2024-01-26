import Link from "next/link";

import {
  HiOutlineBuildingOffice,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav({ activeTab, setActiveTab }) {
  return (
    <aside>
      <ul className="flex flex-col space-y-2">
        <li>
          <Link href="/admin/dashboard" legacyBehavior>
            <a
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/dashboard"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineHome className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/bookings" legacyBehavior>
            <a
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/bookings"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineCalendarDays className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Bookings</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users" legacyBehavior>
            <a
              onClick={() => setActiveTab("users")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/users"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineUsers className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Users</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/products" legacyBehavior>
            <a
              onClick={() => setActiveTab("products")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/products"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Products</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/orders" legacyBehavior>
            <a
              onClick={() => setActiveTab("orders")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/orders"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineClipboardDocumentList className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Orders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/farms" legacyBehavior>
            <a
              onClick={() => setActiveTab("farms")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/farms"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineBuildingOffice className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Farms</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings" legacyBehavior>
            <a
              onClick={() => setActiveTab("settings")}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                activeTab === "/admin/settings"
                  ? "rounded-sm bg-gray-50 text-[#9da452]"
                  : "text-gray-600"
              }`}
            >
              <HiOutlineCog6Tooth className="h-6 w-6 text-gray-400 transition-colors duration-300" />
              <span>Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default MainNav;
