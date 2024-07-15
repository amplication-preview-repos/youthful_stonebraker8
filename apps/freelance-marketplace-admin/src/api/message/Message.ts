export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  content: string | null;
  sender: string | null;
  receiver: string | null;
};
