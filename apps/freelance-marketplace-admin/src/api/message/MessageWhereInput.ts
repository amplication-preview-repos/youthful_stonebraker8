import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
  receiver?: StringNullableFilter;
};
