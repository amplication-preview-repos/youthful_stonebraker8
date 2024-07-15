import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bio?: SortOrder;
  skills?: SortOrder;
  portfolioLinks?: SortOrder;
};
