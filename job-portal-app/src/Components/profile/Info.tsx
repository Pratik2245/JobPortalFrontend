import { ActionIcon } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  Briefcase,
  BriefcaseBusiness,
  MapPin,
  Pencil,
  Save,
} from "lucide-react";
import SelectInput from "./SelectInput";
import { useState } from "react";
import fields from "../../Data/Profile";
const Info = () => {
  const [edit, setEdit] = useState(false);
  const select = fields;
  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
    } else {
      setEdit(false);
      console.log(form.getValues());
    }
  };
  const form = useForm({
    mode: "controlled",
    initialValues: {
      JobTitle: "",
      company: "",
      location: "",
    },
  });
  return (
    <>
      <div className="flex mt-16 justify-between items-center">
        <div className="text-2xl font-semibold mb-3">Jarrod Wood</div>
        <ActionIcon onClick={handleEdit} variant="transparent" size="lg">
          {edit ? (
            <Save color="#ffbd20" style={{ width: "80%", height: "80%" }} />
          ) : (
            <Pencil color="#ffbd20" style={{ width: "70%", height: "70%" }} />
          )}
        </ActionIcon>
      </div>
      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
          </div>
          <SelectInput {...select[2]} />
        </>
      ) : (
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:mb-1 mb-7">
          <div className="">
            <BriefcaseBusiness /> Software Engineer &bull; Google
          </div>
          <div className="">
            <MapPin /> New York, United States
          </div>
          <div className="">
            <Briefcase /> Experience: 2 Years
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
