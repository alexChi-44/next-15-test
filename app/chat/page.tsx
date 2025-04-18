"use client";
import { useEffect, useState } from "react";
import ChatList from "@/components/ui/ChatList";
import ChatWindow from "@/components/ui/ChatWindow";
import { Message } from "@/lib/types";
import { useUserStore } from "@/lib/store/user";
import { useRouter } from "next/navigation";

const messg: Message[] = [
  { authorId: 1, text: "Hey, how are you?", isUser: false, time: "10:30" },
  { authorId: 2, text: "I’m good, thanks!", isUser: true, time: "10:32" },
];
const authrs = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

export default function Home() {
  const router = useRouter();
  const { user, setUser, logout } = useUserStore();
  const [authors, setAuthors] = useState(authrs);

  const [chats, setChats] = useState([
    {
      id: 0,
      name: "Bob",
      lastMessage: "Meeting at 5?",
      time: "10:30",
      messages: messg,
    },
    {
      id: 1,
      name: "Alice",
      lastMessage: "Hey, how are you?",
      time: "10:30",
      messages: [],
    },
  ]);
  const [activeChat, setActiveChat] = useState(0);

  function setNewMessage(text: string) {
    const now = new Date();
    const time = `${now.getHours()}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    const message = { authorId: 1, text, isUser: true, time };
    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === activeChat) {
          return {
            ...chat,
            messages: [...chat.messages, message],
          };
        }
        return chat;
      })
    );
  }

  useEffect(() => {
    if (!user.id) {
      setUser({
        id: 1,
        avatarUrl: "",
        email: "",
        isAuthenticated: true,
        name: "Alex Chi",
      });
    }
  }, [setUser, user]);

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push("/login");
    }
  }, [router, user.isAuthenticated]);

  if (!user.isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-full">
      <ChatList
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <ChatWindow
        messages={chats[activeChat].messages}
        setNewMessage={setNewMessage}
      />
    </div>
  );
}
