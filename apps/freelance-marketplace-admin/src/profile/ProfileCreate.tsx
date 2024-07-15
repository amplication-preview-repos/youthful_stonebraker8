import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <SelectArrayInput
          label="skills"
          source="skills"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
