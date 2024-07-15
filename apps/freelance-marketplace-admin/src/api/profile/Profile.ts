import { JsonValue } from "type-fest";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bio: string | null;
  skills?: Array<"Option1">;
  portfolioLinks: JsonValue;
};
