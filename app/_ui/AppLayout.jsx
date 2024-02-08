import React, { useState, useEffect } from "react";
import Navbar from "../_components/NavBar";
import Footer from "../_components/Footer";
import { useUser } from "../_features/authentication/useUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminNavBar from "../_admin_components/NavBar";
import Sidebar from "../_admin_components/Sidebar";
import AdminDashboardPage from "../admin/dashboard/page";

import FarmsPage from "../admin/farms/page";

import SettingsPage from "../admin/settings/page";
import UsersPage from "../admin/users/page";
import ProductsPage from "../admin/products/page";
import BookingsPage from "../admin/bookings/page";
import OrdersPage from "../admin/orders/page";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

export default function AppLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContent>{children}</LayoutContent>
    </QueryClientProvider>
  );
}

function LayoutContent({ children }) {
  const pathname = usePathname();
  const { user } = useUser();
  const userEmail = user?.email;
  const isAdmin = userEmail === "admin@example.com";
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  if (isAdmin) {
    return (
      <div className="grid min-h-screen grid-cols-[260px,1fr] grid-rows-[auto,1fr]">
        <AdminNavBar />
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main
          className="overflow-scroll bg-gray-50 p-16"
          style={{ maxHeight: "100vh" }}
        >
          <div className="mx-0 my-auto flex max-w-[1200px] flex-col gap-[32px]">
            {activeTab === "/admin/dashboard" && <AdminDashboardPage />}
            {activeTab === "/admin/bookings" && <BookingsPage />}
            {activeTab === "/admin/farms" && <FarmsPage />}
            {activeTab === "/admin/products" && <ProductsPage />}
            {activeTab === "/admin/settings" && <SettingsPage />}
            {activeTab === "/admin/users" && <UsersPage />}
            {activeTab === "/admin/orders" && <OrdersPage />}
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}
