"use client";

import { useState, useRef, useEffect } from "react";
import { Message } from "@/lib/types";
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import MessageMenue from "./MessageBubbleMenue";

interface MessageBubbleProps {
  message: Message;
  onEdit?: (message: Message) => void;
  onDelete?: (message: Message) => void;
}

export default function MessageBubble({
  message,
  onEdit,
  onDelete,
}: MessageBubbleProps) {
  const isUser = message.isUser;
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    if (onEdit) {
      onEdit(message);
    }
    setShowMenu(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(message);
    }
    setShowMenu(false);
  };

  const handleRightClick = (event) => {
    event.preventDefault(); // Disable default behavior
    setShowMenu(true);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(menuRef.current, "menut ref current");
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        bubbleRef.current &&
        !bubbleRef.current.contains(event.target as Node)
      ) {
        console.log("click outside");
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4 relative`}
    >
      <div
        ref={bubbleRef}
        className={`max-w-xs p-3 rounded-lg relative ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        } cursor-pointer group`}
        onContextMenu={handleRightClick}
      >
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <DotsHorizontalIcon className="w-4 h-4" />
        </div>
        <p>{message.text}</p>
        <span className="text-xs opacity-70">{message.time}</span>
      </div>
      {showMenu && (
        <MessageMenue
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          menuRef={menuRef}
        />
      )}
    </div>
  );
}
