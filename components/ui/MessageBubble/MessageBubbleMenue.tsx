"use client";

import { useState, useRef, useEffect } from "react";
import { Message } from "@/lib/types";
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";

interface MessageMenueProps {
  message: Message;
  onEdit?: (message: Message) => void;
  onDelete?: (message: Message) => void;
}

export default function MessageMenue({
  handleEdit,
  handleDelete,
  menuRef,
  position,
}: MessageBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const isUser = true;
  // Close menu when clicking outside
  console.log(position);
  return (
    <div
      ref={menuRef}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`bg-white shadow-lg rounded-lg p-2 z-10 transform transition-all duration-200 ease-out `}
    >
      <div className="flex-col">
        <button
          onClick={handleEdit}
          className="w-full cursor-pointer text-sm flex items-center  gap-2 p-2 hover:bg-gray-100 rounded-b-sm"
          title="Edit message"
        >
          <Pencil1Icon className="w-4 h-4 text-gray-600" />
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="w-full cursor-pointer text-sm  text-red-600 flex items-center gap-2  p-2 hover:bg-gray-100 ounded-b-sm transition-colors"
          title="Delete message"
        >
          <TrashIcon className="w-4 h-4 " />
          Delete
        </button>
      </div>
    </div>
  );
}
