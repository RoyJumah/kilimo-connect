import { loginAsAdmin } from "@/app/_services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAsAdmin(email, password),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      router.push("/admin/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message || "An error occurred");
    },
  });

  return { login, isLoading };
}
