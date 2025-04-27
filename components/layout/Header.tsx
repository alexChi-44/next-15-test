"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-4">
      <button
        className="sm:hidden mr-4 p-2 hover:bg-gray-100 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibold">ALChat PWA</h1>
    </div>
  );
}
