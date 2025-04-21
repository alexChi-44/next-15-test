"use client";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import MessageBubble from "./MessageBubble/MessageBubble";
import MessageInput from "./MessageInput";
import { Message } from "@/lib/types";

type TextMessage = {
  id: number | null;
  text: string;
};

export default function ChatWindow({
  messages,
  setNewMessage,
  // handleEditMessage,
  handleDeleteMessage,
  onMBBack,
}: {
  messages: Message[];
  setNewMessage: (text: string, id: number | null) => void;
  // handleEditMessage: (message: Message) => void;
  handleDeleteMessage: (message: Message) => void;
  onMBBack: () => void;
}) {
  const [message, setMessage] = useState<TextMessage>({ id: null, text: "" });
  const TextInputRef = useRef<HTMLInputElement>(null);

  const onEdit = (message: TextMessage) => {
    TextInputRef.current?.focus();
    setMessage({ id: message.id, text: message.text });
    // handleEditMessage(message);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, i) => (
          <MessageBubble
            key={i}
            message={message}
            onEdit={onEdit}
            onDelete={handleDeleteMessage}
          />
        ))}
      </div>
      <MessageInput
        message={message}
        setMessage={setMessage}
        setNewMessage={setNewMessage}
        ref={TextInputRef}
      />
      <div className=" sm:hidden">
        <button
          onClick={onMBBack}
          className="absolute left-4 bottom-40 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
