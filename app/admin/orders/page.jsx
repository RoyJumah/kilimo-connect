"use client";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Heading from "@/app/_ui/Heading";
import { formatCurrency, formatDate } from "@/lib/utilities/helpers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const fetchOrdersData = async () => {
  const orders = await fetch(`${API_BASE_URL}/api/orders`, {
    next: {
      revalidate: 60,
    },
  });
  if (!orders.ok) throw new Error("Failed to fetch payments data.");

  let data = await orders.json();
  data = data.map((order, index) => {
    return {
      ...order,
      orderNo: `ODR${String(index + 1).padStart(3, "0")}`,
    };
  });

  return data;
};
export default function OrdersPage() {
  const {
    data,
    error,
    isLoading: LoadingOrdersData,
  } = useQuery({
    queryKey: "orders",
    queryFn: fetchOrdersData,
  });

  if (LoadingOrdersData) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Heading>Orders</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Order Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((order) => (
              <TableRow key={order.order_id}>
                <TableCell className="font-medium">{order.orderNo}</TableCell>
                <TableCell className="font-medium">{order.order_id}</TableCell>
                <TableCell>
                  <span
                    className={` inline-block rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      order.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>
                  {order.cart &&
                    order.cart.map((item, index) => (
                      <div key={index} className="space-x-1">
                        <span>{item.quantity}</span> x
                        <span className=" text-gray-500">{item.name}</span>
                      </div>
                    ))}
                </TableCell>
                <TableCell>{formatDate(order.estimatedDelivery)}</TableCell>
                <TableCell>{formatCurrency(order.total_price)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
