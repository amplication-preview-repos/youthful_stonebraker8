export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  read: boolean | null;
};
