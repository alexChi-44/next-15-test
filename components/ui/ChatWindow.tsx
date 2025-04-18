import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { Message } from "@/lib/types";

export default function ChatWindow({
  messages,
  setNewMessage,
}: {
  messages: Message[];
  setNewMessage: (text: string) => void;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, i) => (
          <MessageBubble key={i} message={message} />
        ))}
      </div>
      <MessageInput setNewMessage={setNewMessage} />
    </div>
  );
}
