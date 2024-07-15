export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  reviewer: string | null;
  reviewee: string | null;
};
