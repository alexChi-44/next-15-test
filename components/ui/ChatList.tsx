import { Chat } from "@/lib/types";

export default function ChatList({
  chats = [],
  activeChat,
  setActiveChat,
}: {
  chats: Chat[];
  activeChat: number;
  setActiveChat: (activeChat: number) => void;
}) {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 h-[100dvh] sm:h-full overflow-y-auto">
      {chats.map((chat, i) => (
        <div
          key={chat.id}
          className={`p-4 ${
            activeChat === i
              ? "bg-blue-500 text-white"
              : "bg-gray-50 hover:bg-gray-100 cursor-pointer"
          } border-b border-gray-200`}
        >
          <div
            onClick={() => setActiveChat(i)}
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="text-base font-medium">{chat.name}</h3>
              <p
                className={`text-sm ${
                  activeChat === i ? "text-white" : "text-gray-500"
                } truncate`}
              >
                {chat.lastMessage}
              </p>
            </div>
            <span className="text-xs text-gray-400">{chat.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
