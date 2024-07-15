import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="comment" source="comment" />
        <TextField label="rating" source="rating" />
        <TextField label="reviewer" source="reviewer" />
        <TextField label="reviewee" source="reviewee" />
      </SimpleShowLayout>
    </Show>
  );
};
