import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher, shootFireworks } from "@/lib/utils";
import { HiCheckBadge as CheckIcon } from "react-icons/hi2";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();

  const dispatch = useDispatch();

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher,
  );

  useEffect(() => {
    if (data) {
      shootFireworks();
      dispatch(clearCart());
    }
  }, [data, dispatch]);

  return (
    <div className="container mx-auto px-6 py-12 text-center xl:max-w-screen-xl">
      {error ? (
        <div className="mx-auto max-w-md rounded-md bg-rose-100 p-2 text-rose-500">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div className="mx-auto max-w-md rounded-md bg-gray-100 p-2 text-gray-500">
          <p className="animate-pulse text-lg">Loading...</p>
        </div>
      ) : (
        <div className="mx-auto max-w-lg rounded-md bg-gray-100 px-8 py-4">
          <h2 className="flex flex-col items-center space-x-1 text-4xl font-semibold">
            <CheckIcon className="h-12 w-12 flex-shrink-0 text-green-600" />
            <span>Thanks for your order!</span>
          </h2>
          <p className="mt-3 text-lg">Check your inbox for the receipt.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
