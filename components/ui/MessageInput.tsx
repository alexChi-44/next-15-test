"use client";

import { useState } from "react";

export default function MessageInput({
  setNewMessage,
}: {
  setNewMessage: (text: string) => void;
}) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      setNewMessage(message);
      setMessage("");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-gray-100 border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
