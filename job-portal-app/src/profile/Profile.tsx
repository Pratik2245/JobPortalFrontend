import { ActionIcon, Button, Divider } from "@mantine/core";
import {
  Briefcase,
  BriefcaseBusiness,
  MapPin,
  Pencil,
  Save,
} from "lucide-react";
import ExpCard from "../FindTalent/ExpCard";
import CertificationCard from "../FindTalent/CertificationCard";
import { profile } from "../Data/TalentData";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";

const Profile = () => {
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const newEdit = { ...edit };
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
    console.log(newEdit);
  };
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="relative">
          <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
          <img
            className="rounded-full w-48 mb-4 h-48 absolute -bottom-1/3 left-3 border-[#2d2d2d] border-8"
            src="/avatar.png"
            alt=""
          />
        </div>
        <div className="flex mt-16 justify-between items-center">
          <div className="text-2xl font-semibold mb-3">Jarrod Wood</div>
          <ActionIcon
            onClick={() => handleEdit(0)}
            variant="transparent"
            size="lg"
          >
            {edit[0] ? (
              <Save color="#ffbd20" style={{ width: "80%", height: "80%" }} />
            ) : (
              <Pencil color="#ffbd20" style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...fields[0]} />
              <SelectInput {...fields[1]} />
            </div>
            <SelectInput {...fields[2]} />
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

        <Divider />
        <div className="mt-7 mb-7">
          <div className="text-xl font-semibold flex justify-between mb-2 text-justify">
            About
            <ActionIcon
              onClick={() => handleEdit(1)}
              variant="transparent"
              size="lg"
            >
              {edit[1] ? (
                <Save color="#ffbd20" style={{ width: "80%", height: "80%" }} />
              ) : (
                <Pencil
                  color="#ffbd20"
                  style={{ width: "70%", height: "70%" }}
                />
              )}
            </ActionIcon>
          </div>
          {profile.about}
        </div>
        <Divider />
        <div className="mt-7 mb-7">
          <div className="text-xl font-semibold mb-4">Skills</div>
          <div className="flex flex-wrap  gap-3 ">
            {profile.skills?.map((skill: any, index: any) => (
              <Button key={index} variant="light" radius="xl" color="#ffbd20">
                {skill}
              </Button>
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-7 ">
          <div className="font-semibold text-xl mb-3">Experience</div>
          <div className="flex flex-col gap-4">
            {profile.experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-7">
          <div className="font-semibold text-xl mb-3">Certifications</div>
          <div className="flex flex-col gap-4">
            {profile.certifications.map((item: any, index: any) => (
              <CertificationCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
