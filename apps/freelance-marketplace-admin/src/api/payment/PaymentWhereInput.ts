import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: "Option1";
  freelancer?: StringNullableFilter;
  job?: JobWhereUniqueInput;
};
