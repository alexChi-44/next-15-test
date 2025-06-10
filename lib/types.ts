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

export interface IResponse<T> {
  pagination?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
  data: T;
  errors: string[]; // ✅ much simpler
  messages: string[];
  ok: boolean;
  status: number;
}
