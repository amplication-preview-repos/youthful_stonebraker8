import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  freelancer?: string | null;
  job?: JobWhereUniqueInput | null;
};
