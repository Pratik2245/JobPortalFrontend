import { ActionIcon, Button, TagsInput } from "@mantine/core";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";

const Skills = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [skillsData, setSkills] = useState<string[]>([]);
  const profile = useSelector((state: any) => state.profile);
  const handleEdit = () => {
    setEdit(!edit);
    setSkills(profile.skills);
  };
  const handleSave = () => {
    setEdit(false);
    const updatedProfile = { ...profile, skills: skillsData };
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
    <div className="mt-7 mb-7">
      <div className="text-xl font-semibold mb-4 flex justify-between">
        Skills{" "}
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
        <TagsInput
          placeholder="Enter Skill"
          value={skillsData}
          onChange={setSkills}
          splitChars={[",", " ", "|"]}
        />
      ) : (
        <div className="flex flex-wrap  gap-3 ">
          {profile?.skills?.map((skill: any, index: number) => (
            <Button key={index} variant="light" radius="xl" color="#ffbd20">
              {skill}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
