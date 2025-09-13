import { ActionIcon, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  Briefcase,
  BriefcaseBusiness,
  Check,
  MapPin,
  Pencil,
  X,
} from "lucide-react";
import SelectInput from "./SelectInput";
import { useState } from "react";
import fields from "../../Data/Profile";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";
const Info = () => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const select = fields;
  const handleEdit = () => {
    console.log(profile);
    
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
        totalExp:profile.totalExp,
      });
    } else {
      setEdit(false);
    }
  };
  const form = useForm({
    mode: "controlled",
    initialValues: {
      jobTitle: "",
      company: "",
      location: "",
      totalExp:0,
    },
  });
  const handleSave = () => {
    setEdit(false);
    const updatedProfile = { ...profile, ...form.getValues() };
    dispatch(changeProfile(updatedProfile));
    console.log(updatedProfile);
    toast.success(
      <div>
        <div className="font-semibold text-black text-base">Success</div>
        <div className="text-sm text-gray-800">
          Profile Details Updated Successfully
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
    <>
      <div className="flex mt-16 justify-between items-center">
        <div className="text-2xl font-semibold mb-3"> {user.name}</div>
        <div className="">
          {edit && (
            <ActionIcon
              onClick={handleSave}
              color="green.8"
              variant="transparent"
              size="lg"
            >
              {edit && <Check style={{ width: "70%", height: "70%" }} />}
            </ActionIcon>
          )}
          <ActionIcon
            onClick={handleEdit}
            variant="transparent"
            color={edit ? "red.8" : "#ffbd20"}
            size="lg"
          >
            {edit ? (
              // <Check color="#ffbd20" style={{ width: "80%", height: "80%" }} />
              <X style={{ width: "80%", height: "80%" }} />
            ) : (
              <Pencil style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="location" {...select[2]} />
          <NumberInput min={1} max={50} clampBehavior="strict" label="Total Experience" hideControls withAsterisk {...form.getInputProps('totalExp')} name="totalExp"/>
          </div>
        </>
      ) : (
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:mb-1 mb-7">
          <div className="">
            <BriefcaseBusiness /> {profile.jobTitle},{profile.company}
          </div>
          <div className="">
            <MapPin /> {profile.location}
          </div>
           <div className="">
          <Briefcase />Experience: {profile.totalExp} Years
          </div>
          
        </div>
      )}
    </>
  );
};

export default Info;
