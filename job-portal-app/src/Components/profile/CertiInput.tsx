import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";

const CertiInput = (props: any) => {
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
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      issuer: "",
      issueDate: new Date(),
      certificateId: "",
    },
    validate: {
      name: isNotEmpty("name required"),
      issuer: isNotEmpty("issuer required"),
      certificateId: isNotEmpty("certificateId required"),
      issueDate: isNotEmpty("issueDate is required"),
    },
  });
  const handleSave = () => {
    form.validate();
    if (!form.isValid) return;

    const values = form.getValues();

    // Format the date using your method
    const formattedDate = formatDateForBackend(new Date(values.issueDate));

    const certi = [...profile.certifications];

    certi.push({
      ...values,
      issueDate: formattedDate,
    });

    const updatedProfile = { ...profile, certifications: certi };
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
      <div className="font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          {...form.getInputProps("name")}
          label="Title"
          withAsterisk
          placeholder="enter Title"
        />
        <SelectInput form={form} name={"issuer"} {...fields[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          label="Pick date"
          placeholder="Issue date"
          maxDate={new Date()}
          {...form.getInputProps("issueDate")}
        />
        <TextInput
          {...form.getInputProps("certificateId")}
          label="Certificate Id"
          withAsterisk
          placeholder="Enter ID"
        />
      </div>
      <div className="flex gap-2 mb-5">
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

export default CertiInput;
