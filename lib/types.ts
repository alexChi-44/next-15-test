export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}

export interface Message {
  chat_id: number;
  content: string;
  edited_at: string;
  id: number;
  is_deleted: boolean;
  sender: null;
  sender_id: number;
  sent_at: string;
}
