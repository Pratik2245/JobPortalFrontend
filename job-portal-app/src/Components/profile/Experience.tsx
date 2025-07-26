import { ActionIcon } from "@mantine/core";
import { Pencil, Plus, X } from "lucide-react";
import ExpCard from "./ExpCard";
import ExpInput from "./ExpInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Experience = () => {
  const UserProfile = useSelector((state: any) => state.profile);
  const [exp, setExp] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="mt-7">
      <div className="font-semibold text-xl flex justify-between mb-3">
        Experience
        <div className="flex">
          <ActionIcon
            onClick={() => setExp(true)}
            variant="transparent"
            size="lg"
          >
            <Plus className="w-4/5 h-4/5" />
          </ActionIcon>
          <ActionIcon
            onClick={handleEdit}
            variant="transparent"
            size="lg"
            color={edit ? "red.8" : "#ffbd20"}
          >
            {edit ? (
              <X style={{ width: "80%", height: "80%" }} />
            ) : (
              <Pencil style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {UserProfile?.experiences?.map((exp: any, index: number) => (
          <ExpCard key={index} index={index} {...exp} edit={edit} />
        ))}
      </div>
      {exp && <ExpInput add setEdit={setExp} />}
    </div>
  );
};

export default Experience;
