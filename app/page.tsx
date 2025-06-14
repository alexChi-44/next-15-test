"use client";
import { useEffect, useState } from "react";
import ChatList from "@/components/ui/ChatList";
import ChatWindow from "@/components/ui/ChatWindow";
import { Message } from "@/lib/types";
import { useUserStore } from "@/lib/store/user";
import { ChatSkeleton } from "@/components/ui/skeletons/ChatSkeleton";
import { getChatsAPI } from "@/lib/api/chats";
import { getMessagesAPI } from "@/lib/api/messages";

export default function Home() {
  const { user } = useUserStore();
  const [mbIsSelected, setMbIsSelected] = useState(false);

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

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
        if (chat?.id === activeChatId) {
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
        if (chat?.id === activeChatId) {
          return {
            ...chat,
            messages: [...chat.messages].filter((el) => el.id !== message.id),
          };
        }
        return chat;
      })
    );
  };

  useEffect(() => {
    async function getChats() {
      const chatsData = await getChatsAPI();
      setChats(chatsData || []);
    }
    getChats();
  }, []);

  useEffect(() => {
    async function getMessages(activeChatId) {
      const messagesData = await getMessagesAPI(activeChatId);
      setMessages(messagesData || []);
    }
    if (activeChatId) {
      getMessages(activeChatId);
    }
  }, [activeChatId]);

  function onMbBack() {
    setMbIsSelected(true);
  }
  function onSetActiveChat(activeChat: number) {
    setMbIsSelected(false);
    setActiveChatId(activeChat);
  }

  // if (!user?.id) {
  //   return <ChatSkeleton />;
  // }

  return (
    <div className="flex h-full">
      <div className={`${mbIsSelected ? "block" : "hidden"} sm:block`}>
        <ChatList
          chats={chats}
          activeChat={activeChatId}
          setActiveChat={onSetActiveChat}
          onAddNewChat={() => {}}
        />
      </div>

      {!mbIsSelected ? (
        <ChatWindow
          userId={user?.id}
          messages={messages}
          setNewMessage={setNewMessage}
          // handleEditMessage={handleEditMessage}
          handleDeleteMessage={handleDeleteMessage}
          onMBBack={onMbBack}
        />
      ) : null}
    </div>
  );
}
