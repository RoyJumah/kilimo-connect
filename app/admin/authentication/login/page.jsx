"use client";
import { useLogin } from "@/app/_features/authentication/useAdminLogin";
import { useState } from "react";
import { BiLoader } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("adminpass");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        // clearing the field if the login isn't successful
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-2  shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                disabled={isLoading}
                value={email}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md   border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                id="password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-lime-500 focus:outline-none focus:ring-lime-800 sm:text-sm"
                placeholder="Password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-sm leading-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#3d6409] px-4 py-2 text-sm font-medium text-white hover:bg-[#284306] focus:outline-none focus:ring-2 focus:ring-[#47750a] focus:ring-offset-2"
            >
              {isLoading ? <BiLoader /> : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
