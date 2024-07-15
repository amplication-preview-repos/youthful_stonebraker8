import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidUpdateInput = {
  amount?: number | null;
  message?: string | null;
  freelancer?: string | null;
  job?: JobWhereUniqueInput | null;
};
