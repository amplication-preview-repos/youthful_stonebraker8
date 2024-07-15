import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  bio?: string | null;
  skills?: Array<"Option1">;
  portfolioLinks?: InputJsonValue;
};
