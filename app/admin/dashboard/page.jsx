"use client";
import Heading from "@/app/_ui/Heading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const fetchPaymentsData = async () => {
  const payments = await fetch(`${API_BASE_URL}/api/payments`, {
    next: {
      revalidate: 60,
    },
  });
  if (!payments.ok) throw new Error("Failed to fetch payments data.");

  let data = await payments.json();
  data = data.map((payment, index) => {
    const avatarUrl = `https://i.pravatar.cc/48?u=${payment.id}`;

    return {
      ...payment,
      avatar: avatarUrl,
      orderNo: `ODR${String(index + 1).padStart(3, "0")}`,
    };
  });

  return data;
};
export default function AdminDashboardPage() {
  const {
    data,
    error,
    isLoading: LoadingPaymentsData,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchPaymentsData,
  });

  if (LoadingPaymentsData) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Heading> Dashboard</Heading>
      <div className="relative h-auto w-[375px] rounded-sm bg-white p-6 shadow-sm">
        <div className="absolute left-3 top-5 h-4 w-[3px] bg-teal-600"></div>
        <h2 className="mb-4 ml-4 text-sm font-semibold uppercase">
          Recent Customers
        </h2>
        <div>
          {data.map((payment, i) => (
            <div key={i} className="mb-4 flex gap-2">
              <Image
                src={payment.avatar}
                alt="User Avatar"
                width={35}
                height={35}
                className="rounded-full"
              />
              <div>
                <h3 className="text-sm">{payment.customer_details.name}</h3>
                <span className="text-xs text-[#7987a1]">
                  User ID: #{payment.orderNo}
                </span>
              </div>
              <div>
                {payment.payment_status === "paid" ? (
                  <span className=" inline-block rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-green-500">
                    paid
                  </span>
                ) : (
                  <span className=" inline-block rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-500">
                    pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
