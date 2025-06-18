import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const [startDate, setStartDate] = useState<string | null>();
  const [endDate, setEndDate] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...fields[0]} />
        <SelectInput {...fields[1]} />
      </div>
      <SelectInput {...fields[2]} />
      <Textarea
        withAsterisk
        className="font-semibold"
        label="Summary"
        placeholder="Enter Summary"
        value={desc}
        minRows={3}
        autosize
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          label="Pick date"
          placeholder="Start date"
          value={startDate}
          maxDate={endDate || undefined}
          onChange={setStartDate}
        />
        <MonthPickerInput
          withAsterisk
          disabled={checked}
          label="Pick date"
          placeholder="End date"
          value={endDate}
          minDate={startDate || undefined}
          maxDate={new Date()}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        autoContrast
        label={"Currently working here"}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <div className="flex gap-2 mb-2">
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

export default ExpInput;
