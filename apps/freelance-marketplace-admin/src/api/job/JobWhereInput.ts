import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type JobWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  deadline?: DateTimeNullableFilter;
  budget?: FloatNullableFilter;
  client?: StringNullableFilter;
  bids?: BidListRelationFilter;
  payments?: PaymentListRelationFilter;
};
