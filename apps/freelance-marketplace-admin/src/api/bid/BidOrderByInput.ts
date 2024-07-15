import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  message?: SortOrder;
  freelancer?: SortOrder;
  jobId?: SortOrder;
};
