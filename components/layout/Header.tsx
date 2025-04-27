"use client";
import { HamburgerMenuIcon, EnterFullScreenIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Header({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // const navBar = document.getElementById("top-nav");
    if (isFullScreen) {
      document.documentElement.requestFullscreen({
        navigationUI: "hide",
      });
      // navBar.style.display = "none"; // Hide navigation
      return;
    }
    document.exitFullscreen();
    // navBar.style.display = "block"; // Show navigation
  }, [isFullScreen]);

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-4">
      <button
        className="sm:hidden mr-4 p-2 hover:bg-gray-100 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibol flex-1">ALChat PWA</h1>

      <button
        className="cursor-pointer"
        onClick={() => setIsFullScreen((prev) => !prev)}
      >
        <EnterFullScreenIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
