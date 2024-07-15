import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="sender" source="sender" />
        <TextInput label="receiver" source="receiver" />
      </SimpleForm>
    </Edit>
  );
};
