export const ApiEndpoints = {
  USER: "/user",
  USERS: "/users",
  REGISTER: "/auth/register",
  LOGIN_USER: "/auth/login",
  CHATS: "/chats",
  MESSAGES: (chatId: string) => `/messages/${chatId}`,
};
