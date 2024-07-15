import { Job } from "../job/Job";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  freelancer: string | null;
  job?: Job | null;
};
