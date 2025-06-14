export const ApiEndpoints = {
  USER: "/user",
  REGISTER: "/auth/register",
  LOGIN_USER: "/auth/login",
  CHATS: "/chats",
  MESSAGES: (chatId: string) => `/messages/${chatId}`,
};
