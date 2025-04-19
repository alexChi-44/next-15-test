"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble/MessageBubble";
import MessageInput from "./MessageInput";
import { Message } from "@/lib/types";

export default function ChatWindow({
  messages,
  setNewMessage,
}: {
  messages: Message[];
  setNewMessage: (text: string) => void;
}) {
  const handleEditMessage = (message: Message) => {
    // In a real app, you would implement the edit functionality here
    // For example, open a modal or inline edit form
    console.warn("Edit message:", message.text);
  };

  const handleDeleteMessage = (message: Message) => {
    // In a real app, you would implement the delete functionality here
    // For example, call an API to delete the message
    console.warn("Delete message:", message.text);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, i) => (
          <MessageBubble
            key={i}
            message={message}
            onEdit={handleEditMessage}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
      <MessageInput setNewMessage={setNewMessage} />
    </div>
  );
}
