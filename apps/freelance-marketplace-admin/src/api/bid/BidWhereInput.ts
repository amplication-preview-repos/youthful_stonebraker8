import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  message?: StringNullableFilter;
  freelancer?: StringNullableFilter;
  job?: JobWhereUniqueInput;
};
