export const ApiEndpoints = {
  AUTH: "/auth/register",

  //remove
  ACCOUNT_DETAILS: "/user/profile",
  ADDRESS: (id = "") => `/user/address/${id}`,
  APPLY_COUPON: "/messages/12",
};
