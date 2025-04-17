import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { Message } from '@/lib/types';

const mockMessages: Message[] = [
  { id: '1', text: 'Hey, how are you?', sender: 'other', time: '10:30' },
  { id: '2', text: 'I’m good, thanks!', sender: 'user', time: '10:32' },
];

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {mockMessages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
}