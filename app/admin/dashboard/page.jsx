import { getOrdersByDate } from "@/app/_services/apiOrder";
import Heading from "@/app/_ui/Heading";
import moment from "moment";
import React from "react";

export default function AdminDashboardPage() {
  const date = "2024-01-29T00:00:00.000Z";

  getOrdersByDate(date).then((orders) => {
    console.log(`Orders created on ${date}:`, orders);
  });
  return (
    <div>
      <Heading> Dashboard</Heading>
    </div>
  );
}
