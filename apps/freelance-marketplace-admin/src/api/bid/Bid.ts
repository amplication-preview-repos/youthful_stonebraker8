import { Job } from "../job/Job";

export type Bid = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  message: string | null;
  freelancer: string | null;
  job?: Job | null;
};
