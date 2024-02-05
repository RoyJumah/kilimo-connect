import moment from "moment";

export const calculateDeliveryTime = (order) => {
  const deliveryIn = moment(order?.edited_at)
    .add(3, "hours")
    .diff(moment(), "minutes"); // Calculate the difference in minutes

  const hoursRemaining = Math.floor(deliveryIn / 60); // Calculate hours remaining
  const minutesRemaining = deliveryIn % 60; // Calculate minutes remaining

  return { deliveryIn, hoursRemaining, minutesRemaining };
};
