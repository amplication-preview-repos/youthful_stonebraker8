import { Bid } from "../bid/Bid";
import { Payment } from "../payment/Payment";

export type Job = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  deadline: Date | null;
  budget: number | null;
  client: string | null;
  bids?: Array<Bid>;
  payments?: Array<Payment>;
};
