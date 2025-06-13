"use client";
import { use, useEffect, useState } from "react";
import ChatList from "@/components/ui/ChatList";
import ChatWindow from "@/components/ui/ChatWindow";
import { Message } from "@/lib/types";
import { useUserStore } from "@/lib/store/user";
import { useRouter } from "next/navigation";
import { ChatSkeleton } from "@/components/ui/skeletons/ChatSkeleton";

const messg: Message[] = [
  {
    authorId: 1,
    id: 0,
    text: "Hey, how are you?",
    isUser: false,
    time: "10:30",
  },
  {
    authorId: 2,
    id: 1,
    text: "I’m good, thanks!",
    isUser: true,
    time: "10:32",
  },
];

export default function Home() {
  const router = useRouter();
  const { user, setUser } = useUserStore(); //logout
  // const [authors, setAuthors] = useState(authrs);
  const [mbIsSelected, setMbIsSelected] = useState(false);
  console.log(user, "user !!");
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

  function setNewMessage(text: string, id: number | null) {
    const now = new Date();
    const time = `${now.getHours()}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    const message = {
      authorId: 1,
      id: Math.random(),
      text,
      isUser: true,
      time,
    };
    setChats((prev) =>
      prev.map((chat) => {
        if (chat?.id === activeChat) {
          if (id) {
            return {
              ...chat,
              messages: [...chat.messages].map((el) =>
                el.id === id ? { ...el, text } : el
              ),
            };
          } else {
            return {
              ...chat,
              messages: [...chat.messages, message],
            };
          }
        }
        return chat;
      })
    );
  }

  // const handleEditMessage = (message: Message) => {
  //   // In a real app, you would implement the edit functionality here
  //   // For example, open a modal or inline edit form
  //   console.warn("Edit message:", message.text);
  // };

  const handleDeleteMessage = (message: Message) => {
    setChats((prev) =>
      prev.map((chat) => {
        if (chat?.id === activeChat) {
          return {
            ...chat,
            messages: [...chat.messages].filter((el) => el.id !== message.id),
          };
        }
        return chat;
      })
    );
  };

  // useEffect(() => {
  //   if (!user?.id) {
  //     setUser({
  //       id: 1,
  //       avatarUrl: "",
  //       email: "",
  //       isAuthenticated: true,
  //       name: "Alex Chi",
  //     });
  //   }
  // }, [setUser, user]);

  function onMbBack() {
    setMbIsSelected(true);
  }
  function onSetActiveChat(activeChat: number) {
    setMbIsSelected(false);
    setActiveChat(activeChat);
  }

  // if (!user?.isAuthenticated) {
  //   return <ChatSkeleton />;
  // }

  return (
    <div className="flex h-full">
      <div className={`${mbIsSelected ? "block" : "hidden"} sm:block`}>
        <ChatList
          chats={chats}
          activeChat={activeChat}
          setActiveChat={onSetActiveChat}
          onAddNewChat={() => {}}
        />
      </div>

      {!mbIsSelected ? (
        <ChatWindow
          messages={chats[activeChat].messages}
          setNewMessage={setNewMessage}
          // handleEditMessage={handleEditMessage}
          handleDeleteMessage={handleDeleteMessage}
          onMBBack={onMbBack}
        />
      ) : null}
    </div>
  );
}
