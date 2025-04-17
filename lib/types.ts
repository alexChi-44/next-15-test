export interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
  }
  
  export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'other';
    time: string;
  }