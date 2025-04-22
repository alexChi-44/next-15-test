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
  handleDeleteMessage,
  onMBBack,
}: {
  messages: Message[];
  setNewMessage: (text: string, id: number | null) => void;
  handleDeleteMessage: (message: Message) => void;
  onMBBack: () => void;
}) {
  const [message, setMessage] = useState<TextMessage>({ id: null, text: "" });
  const TextInputRef = useRef<HTMLTextAreaElement>(null);

  const onEdit = (message: TextMessage) => {
    TextInputRef.current?.focus();
    setMessage({ id: message.id, text: message.text });
  };

  return (
    <div className="flex-1 flex flex-col h-[100dvh] sm:h-full">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
          <div className="flex items-center">
            <button
              onClick={onMBBack}
              className="sm:hidden mr-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {messages.map((message, i) => (
            <MessageBubble
              key={i}
              message={message}
              onEdit={onEdit}
              onDelete={handleDeleteMessage}
            />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 bg-white border-t border-gray-200">
        <MessageInput
          message={message}
          setMessage={setMessage}
          setNewMessage={setNewMessage}
          ref={TextInputRef}
        />
      </div>
    </div>
  );
}
