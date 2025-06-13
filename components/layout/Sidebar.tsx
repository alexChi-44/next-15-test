"use client";
import Image from "next/image";
import {
  ExitIcon,
  FaceIcon,
  ImageIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useUserStore } from "@/lib/store/user";
import { useState } from "react";

export default function Sidebar() {
  const { user, logout } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-700 opacity-75 transition-opacity sm:hidden z-40 overflow-hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed sm:static inset-y-0 left-0 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        sm:translate-x-0 transition-transform duration-300 ease-in-out
        w-80 min-w-48 bg-gray-100 border-r border-gray-200 flex-col z-50
        flex overflow-y-auto max-h-screen
      `}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/dogs.svg"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user?.username}</h2>
                <p className="text-sm text-gray-500">
                  {user ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <button
              className="sm:hidden p-2 hover:bg-gray-200 rounded-full"
              onClick={onClose}
            >
              <Cross2Icon className="w-5 h-5" />
            </button>
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
    </>
  );
}
