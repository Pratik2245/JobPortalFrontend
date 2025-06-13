import {
  ActionIcon,
  Button,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  Briefcase,
  BriefcaseBusiness,
  MapPin,
  Pencil,
  Plus,
  Save,
} from "lucide-react";
import { profile } from "../Data/TalentData";
import { useState } from "react";
import SelectInput from "./SelectInput";
import ExpCard from "./ExpCard";

import ExpInput from "./ExpInput";
import CertificationCard from "./CertificationCard";
import CertiInput from "./CertiInput";
import fields from "../Data/Profile";

const Profile = () => {
  const [about, setAbout] = useState(
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively."
  );
  const [skill, setSkill] = useState<string[]>([
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ]);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const newEdit = { ...edit };
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  const [exp, setExp] = useState(false);
  const [addCertificate, setAddCertificate] = useState(false);
  const select = fields;

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
          {edit[1] ? (
            <Textarea
              className="font-semibold"
              placeholder="Tell us something about you..."
              value={about}
              minRows={3}
              autosize
              onChange={(event) => setAbout(event.currentTarget.value)}
            />
          ) : (
            about
          )}
        </div>
        <Divider />
        <div className="mt-7 mb-7">
          <div className="text-xl font-semibold mb-4 flex justify-between">
            Skills{" "}
            <ActionIcon
              onClick={() => handleEdit(2)}
              variant="transparent"
              size="lg"
            >
              {edit[2] ? (
                <Save color="#ffbd20" style={{ width: "80%", height: "80%" }} />
              ) : (
                <Pencil
                  color="#ffbd20"
                  style={{ width: "70%", height: "70%" }}
                />
              )}
            </ActionIcon>
          </div>
          {edit[2] ? (
            <TagsInput
              placeholder="Enter Skill"
              value={skill}
              onChange={setSkill}
              splitChars={[",", " ", "|"]}
            />
          ) : (
            <div className="flex flex-wrap  gap-3 ">
              {skill?.map((skill: any, index: any) => (
                <Button key={index} variant="light" radius="xl" color="#ffbd20">
                  {skill}
                </Button>
              ))}
            </div>
          )}
        </div>
        <Divider />
        <div className="mt-7 ">
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
                onClick={() => handleEdit(3)}
                variant="transparent"
                size="lg"
              >
                {edit[3] ? (
                  <Save
                    color="#ffbd20"
                    style={{ width: "80%", height: "80%" }}
                  />
                ) : (
                  <Pencil
                    color="#ffbd20"
                    style={{ width: "70%", height: "70%" }}
                  />
                )}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {profile.experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))}
          </div>
          {exp && <ExpInput add setEdit={setExp} />}
        </div>
        <Divider />
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
              <ActionIcon
                onClick={() => handleEdit(4)}
                variant="transparent"
                size="lg"
              >
                {edit[4] ? (
                  <Save
                    color="#ffbd20"
                    style={{ width: "80%", height: "80%" }}
                  />
                ) : (
                  <Pencil
                    color="#ffbd20"
                    style={{ width: "70%", height: "70%" }}
                  />
                )}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {profile.certifications.map((item: any, index: any) => (
              <CertificationCard edit={edit[4]} key={index} {...item} />
            ))}
            {addCertificate && <CertiInput setEdit={setAddCertificate} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
