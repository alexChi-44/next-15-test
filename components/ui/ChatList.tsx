import { Chat } from '@/lib/types';

const mockChats: Chat[] = [
  { id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30' },
  { id: '2', name: 'Bob', lastMessage: 'Meeting at 5?', time: '09:15' },
];

export default function ChatList() {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      {mockChats.map((chat) => (
        <div
          key={chat.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium">{chat.name}</h3>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-400">{chat.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}