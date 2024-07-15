import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { PaymentUpdateManyWithoutJobsInput } from "./PaymentUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  title?: string | null;
  description?: string | null;
  deadline?: Date | null;
  budget?: number | null;
  client?: string | null;
  bids?: BidUpdateManyWithoutJobsInput;
  payments?: PaymentUpdateManyWithoutJobsInput;
};
