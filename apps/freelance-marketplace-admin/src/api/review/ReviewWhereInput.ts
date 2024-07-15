import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: IntNullableFilter;
  reviewer?: StringNullableFilter;
  reviewee?: StringNullableFilter;
};
