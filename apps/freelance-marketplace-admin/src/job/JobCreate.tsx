import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="deadline" source="deadline" />
        <NumberInput label="budget" source="budget" />
        <TextInput label="client" source="client" />
        <ReferenceArrayInput
          source="bids"
          reference="Bid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BidTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
