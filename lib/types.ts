export interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
  }
  
  export interface Message {
    authorId: number;
    text: string;
    isUser: boolean;
    time: string;
  }