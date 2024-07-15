import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { PaymentCreateNestedManyWithoutJobsInput } from "./PaymentCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  title?: string | null;
  description?: string | null;
  deadline?: Date | null;
  budget?: number | null;
  client?: string | null;
  bids?: BidCreateNestedManyWithoutJobsInput;
  payments?: PaymentCreateNestedManyWithoutJobsInput;
};
