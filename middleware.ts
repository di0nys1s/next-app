export { default } from "next-auth/middleware";

export const config = {
  // * means zero or more params
  // + means one or more params
  // ? means zero or one params
  matcher: ["/users/:id*"],
};
