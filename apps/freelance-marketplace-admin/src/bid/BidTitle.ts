import { Bid as TBid } from "../api/bid/Bid";

export const BID_TITLE_FIELD = "freelancer";

export const BidTitle = (record: TBid): string => {
  return record.freelancer?.toString() || String(record.id);
};
