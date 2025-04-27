"use client";
import { useState } from "react";
import { useUserStore } from "@/lib/store/user";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      id: 1,
      name: "John Doe",
      email: email,
      password: password,
      isAuthenticated: true,
      avatarUrl: "/default-avatar.png",
    };

    setUser(userData);
    sessionStorage.setItem("ST_app_auth", JSON.stringify(userData));
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-screen sm:w-100 bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              //   type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem("ST_app_auth");
            }}
            className="cursor-pointer w-full text-gray-500 underline text-sm hover:text-gray-700"
          >
            Clear Data
          </button>
        </div>
      </form>
    </div>
  );
}
