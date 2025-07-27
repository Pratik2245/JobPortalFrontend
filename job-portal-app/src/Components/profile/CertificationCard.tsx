import { ActionIcon } from "@mantine/core";
import { Trash } from "lucide-react";
import { formatDate } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const CertificationCard = (props: any) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const handleDelete = () => {
    const exp = [...profile.certifications];
    exp.splice(props.index, 1);
    const updatedProfile = { ...profile, certifications: exp };
    props.setEdit(edit);
    dispatch(changeProfile(updatedProfile));
    toast.error(
      <div>
        <div className="font-semibold text-black text-base">Success</div>
        <div className="text-sm text-gray-800">Deleted Successfully</div>
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      }
    );
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img className="h-7 " src={`/Icons/${props.issuer}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-[#b0b0b0]">{props.issuer}</div>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <div className="">
            <div className="text-sm">Issued {formatDate(props.issueDate)}</div>
            <div className="text-sm">ID:{props.certificateId}</div>
          </div>
          {props.edit && (
            <ActionIcon variant="transparent" color="red.8" size="lg">
              <Trash
                strokeWidth={2.5}
                onClick={handleDelete}
                style={{ width: "70%", height: "70%" }}
              />
            </ActionIcon>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
