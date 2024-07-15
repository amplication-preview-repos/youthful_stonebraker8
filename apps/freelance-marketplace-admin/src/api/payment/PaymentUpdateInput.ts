import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  freelancer?: string | null;
  job?: JobWhereUniqueInput | null;
};
