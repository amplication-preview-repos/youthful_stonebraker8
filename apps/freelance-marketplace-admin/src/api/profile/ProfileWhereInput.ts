import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProfileWhereInput = {
  id?: StringFilter;
  bio?: StringNullableFilter;
  portfolioLinks?: JsonFilter;
};
