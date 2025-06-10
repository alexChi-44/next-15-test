export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}

export interface Message {
  authorId: number;
  id: number;
  text: string;
  isUser: boolean;
  time: string;
}