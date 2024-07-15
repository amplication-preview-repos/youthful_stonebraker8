import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  bio?: string | null;
  skills?: Array<"Option1">;
  portfolioLinks?: InputJsonValue;
};
