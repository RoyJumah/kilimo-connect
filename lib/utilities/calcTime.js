import moment from "moment";

export const calculateDeliveryTime = (order) => {
  const deliveryIn = moment(order?.estimatedDelivery)
    .add(2, "hours")
    .diff(moment(), "minutes"); // Calculate the difference in minutes

  const hoursRemaining = Math.floor(deliveryIn / 60); // Calculate hours remaining
  const minutesRemaining = deliveryIn % 60; // Calculate minutes remaining

  return { deliveryIn, hoursRemaining, minutesRemaining };
};
