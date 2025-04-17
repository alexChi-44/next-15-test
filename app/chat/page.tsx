import ChatList from '@/components/ui/ChatList';
import ChatWindow from '@/components/ui/ChatWindow';

export default function Home() {
  return (
    <div className="flex h-full">
      <ChatList />
      <ChatWindow />
    </div>
  );
}