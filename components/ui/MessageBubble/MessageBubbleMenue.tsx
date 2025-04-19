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
}: MessageBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const isUser = true;
  // Close menu when clicking outside

  return (
    <div
      ref={menuRef}
      className={`absolute ${isUser ? "right-0" : "left-0"} top-0 mt-[-40px] ${
        isUser ? "mr-2" : "ml-2"
      } bg-white shadow-lg rounded-lg p-2 z-10`}
    >
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Edit message"
        >
          <Pencil1Icon className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Delete message"
        >
          <TrashIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
