import { ActionIcon } from "@mantine/core";
import { Pencil, Plus, X } from "lucide-react";
import CertificationCard from "./CertificationCard";
import CertiInput from "./CertiInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certification = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const [addCertificate, setAddCertificate] = useState(false);
  const UserProfile = useSelector((state: any) => state.profile);
  return (
    <div className="mt-7">
      <div className="font-semibold flex justify-between text-xl mb-3">
        Certifications{" "}
        <div className="flex">
          <ActionIcon
            onClick={() => setAddCertificate(true)}
            variant="transparent"
            size="lg"
          >
            <Plus className="w-4/5 h-4/5" />
          </ActionIcon>
          <ActionIcon onClick={handleEdit} variant="transparent" size="lg">
            {edit ? (
              <X color="#ffbd20" style={{ width: "80%", height: "80%" }} />
            ) : (
              <Pencil color="#ffbd20" style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {UserProfile?.certifications?.map((item: any, index: number) => (
          <CertificationCard
            edit={edit}
            key={index}
            setEdit={setEdit}
            index={index}
            xx
            {...item}
          />
        ))}
        {addCertificate && <CertiInput setEdit={setAddCertificate} />}
      </div>
    </div>
  );
};

export default Certification;
