import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
  const [issueDate, setIssueDate] = useState<string | null>();
  return (
    <div className="flex flex-col gap-3">
      <div className="font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="enter Title" />
        <SelectInput {...fields[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          label="Pick date"
          placeholder="Issue date"
          value={issueDate}
          maxDate={new Date()}
          onChange={setIssueDate}
        />
        <TextInput label="Certificate Id" withAsterisk placeholder="Enter ID" />
      </div>
      <div className="flex gap-2 mb-5">
        <Button
          onClick={() => props.setEdit(false)}
          color="#ffbd20"
          variant="outline"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red.5"
          variant="light"
        >
          Discard
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
