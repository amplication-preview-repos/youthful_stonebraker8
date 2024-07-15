import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  portfolioLinks: JsonValue;
  bio: string | null;
  skills?: Array<"Option1">;
  role?: "Option1" | null;
};
