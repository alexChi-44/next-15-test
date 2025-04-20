"use client";
import Image from "next/image";
import { ExitIcon, FaceIcon, ImageIcon } from "@radix-ui/react-icons";
import { useUserStore } from "@/lib/store/user";

export default function Sidebar() {
  const { user, logout } = useUserStore(); //setUser
  return (
    <div className="hidden sm:flex w-80 min-w-48 bg-gray-100 border-r border-gray-200 flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Image
            src="/dogs.svg"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">
              {user.isAuthenticated ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
            <FaceIcon className="w-5 h-5 mr-2" />
            <span>Chats</span>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
            <ImageIcon className="w-5 h-5 mr-2" />
            <span>Profile</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer text-red-600"
            onClick={logout}
          >
            <ExitIcon className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
