import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";

const formatDateForBackend = (date: Date): string => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
};

const ExpInput = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is Required"),
      company: isNotEmpty("Company Name is Required"),
      location: isNotEmpty("location is Required"),
      description: isNotEmpty("description is Required"),
    },
  });

  useEffect(() => {
    if (!props.add) {
      form.setValues({
        title: props.title,
        company: props.company,
        location: props.location,
        description: props.description,
        startDate: new Date(props.startDate),
        endDate: new Date(props.endDate),
        working: props.working,
      });
    }
  }, [props]);

  const handleSave = () => {
    form.validate();
    if (!form.isValid) return;

    const values = form.getValues();
    const exp = [...profile.experiences];

    const formattedExp = {
      ...values,
      startDate: formatDateForBackend(new Date(values.startDate)),
      endDate: formatDateForBackend(new Date(values.endDate)),
    };

    if (props.add) {
      exp.push(formattedExp);
    } else {
      exp[props.index] = formattedExp;
    }

    const updatedProfile = { ...profile, experiences: exp };
    dispatch(changeProfile(updatedProfile));
    props.setEdit(false);

    toast.success(
      <div>
        <div className="font-semibold text-black text-base">Success</div>
        <div className="text-sm text-gray-800">
          Profile Details {props.add ? "Added" : "Updated"} Successfully
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      }
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput form={form} name="title" {...fields[0]} />
        <SelectInput form={form} name="company" {...fields[1]} />
      </div>
      <SelectInput form={form} name="location" {...fields[2]} />
      <Textarea
        {...form.getInputProps("description")}
        withAsterisk
        className="font-semibold"
        label="Summary"
        placeholder="Enter Summary"
        minRows={3}
        autosize
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps("startDate")}
          withAsterisk
          label="Pick date"
          placeholder="Start date"
          value={form.values.startDate}
          maxDate={form.values.endDate || undefined}
        />
        <MonthPickerInput
          {...form.getInputProps("endDate")}
          withAsterisk
          disabled={form.getValues().working}
          label="Pick date"
          placeholder="End date"
          value={form.values.endDate}
          minDate={form.values.startDate || undefined}
          maxDate={new Date()}
        />
      </div>
      <Checkbox
        autoContrast
        checked={form.getValues().working}
        onChange={(event) =>
          form.setFieldValue("working", event.currentTarget.checked)
        }
        label={"Currently working here"}
      />
      <div className="flex gap-2 mb-2">
        <Button onClick={handleSave} color="#ffbd20" variant="outline">
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
