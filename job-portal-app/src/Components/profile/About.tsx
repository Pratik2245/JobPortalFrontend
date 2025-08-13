import { ActionIcon, Textarea } from "@mantine/core";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";

const About = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const [about, setAbout] = useState("");

  const handleSave = () => {
    setEdit(false);
    const updatedProfile = { ...profile, about: about };
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
  const handleEdit = () => {
    setEdit(!edit);
    setAbout(profile.about);
  };
  return (
    <div className="mt-7 mb-7">
      <div className="text-xl font-semibold flex justify-between mb-2 text-justify">
        About
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
        <Textarea
          className="font-semibold"
          placeholder="Tell us something about you..."
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          minRows={3}
          autosize
        />
      ) : (
        profile.about
      )}
    </div>
  );
};

export default About;
