import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  portfolioLinks?: InputJsonValue;
  bio?: string | null;
  skills?: Array<"Option1">;
  role?: "Option1" | null;
};
