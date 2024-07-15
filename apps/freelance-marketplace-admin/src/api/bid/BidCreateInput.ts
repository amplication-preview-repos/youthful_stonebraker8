import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidCreateInput = {
  amount?: number | null;
  message?: string | null;
  freelancer?: string | null;
  job?: JobWhereUniqueInput | null;
};
