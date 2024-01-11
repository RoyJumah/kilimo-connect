"use client";

import { CiDeliveryTruck } from "react-icons/ci";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { formatCurrency } from "@/lib/utilities/helpers";
import Image from "next/image";

import { getOrder } from "../_services/apiOrder";
import { useUser } from "../_features/authentication/useUser";
import { calculateDeliveryTime } from "@/lib/utilities/calcTime";

export default function TopMenu() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();
  // let cartItems = [];

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const data = await getOrder(user.id);
          setOrders(data);
          setLoading(false);
        } catch (error) {
          setError("Failed to fetch orders");
          setLoading(false);
        }
      }
    };
    fetchOrders();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="OrdersPage" className="mx-auto mt-4 max-w-6xl px-2 sm:w-[800px]">
      <div className="mb-2 flex items-center text-base sm:mb-4 sm:text-xl">
        <CiDeliveryTruck className="text-green-500" size={35} />
        <span className="pl-4">Order Summary</span>
      </div>
      {orders.length < 1 ? (
        <div className="flex items-center justify-center">
          You have no order history
        </div>
      ) : null}

      {orders.map((order, i) =>
        ((order) => {
          const { deliveryIn, hoursRemaining, minutesRemaining } =
            order.status === "approved"
              ? calculateDeliveryTime(order)
              : {
                  deliveryIn: null,
                  hoursRemaining: null,
                  minutesRemaining: null,
                };
          return (
            <div key={i} className=" mx-auto max-w-6xl p-6 text-sm">
              <div className="flex justify-end">
                <span
                  className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white ${
                    order.status === "approved" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {order.status} order
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
                <p className="font-medium ">
                  {deliveryIn !== null && deliveryIn >= 0
                    ? `Only ${hoursRemaining} hr(s) and ${minutesRemaining} minutes left 😃`
                    : order.status === "approved"
                    ? "Order should have arrived 🚚"
                    : "This order is being processed 😀 "}
                </p>
                {order.status === "approved" && (
                  <p className="text-xs text-stone-500">
                    (Estimated delivery:{" "}
                    {moment(order?.estimatedDelivery)
                      .add(3, "hours")
                      .calendar()}
                    )
                  </p>
                )}
              </div>

              <div className="border-b py-1">
                <div className="pt-2">
                  <span className="mr-2 font-bold">Order Id :</span>
                  {order?.order_id}
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  {order.cart.map((item, i) => (
                    <div
                      key={i}
                      className="mt-4 flex flex-col items-center gap-4 sm:mt-0 sm:flex-row"
                    >
                      <Link
                        href={`/products/${item.product_id}`}
                        legacyBehavior
                      >
                        <a className="py-1 font-bold text-blue-500 hover:underline">
                          <Image
                            alt={item.name}
                            width={80}
                            height={80}
                            src={item.image}
                          />
                        </a>
                      </Link>
                      <div className="flex flex-col ">
                        <p className="font-bold">{item.name}</p>
                        <p>{item.quantity} kg(s)</p>

                        <span className="mt-auto">
                          {formatCurrency(item.totalPrice)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })(order),
      )}
    </div>
  );
}
