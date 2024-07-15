import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOB_TITLE_FIELD } from "./JobTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="deadline" source="deadline" />
        <TextField label="budget" source="budget" />
        <TextField label="client" source="client" />
        <ReferenceManyField reference="Bid" target="jobId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="message" source="message" />
            <TextField label="freelancer" source="freelancer" />
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Payment" target="jobId" label="Payments">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="status" source="status" />
            <TextField label="freelancer" source="freelancer" />
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
