import { Button, Divider } from "@mantine/core";
import { Briefcase, BriefcaseBusiness, MapPin } from "lucide-react";

import CertificationCard from "../FindTalent/CertificationCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserData } from "../../Services/ProfileServices";
import ExpCard from "../FindTalent/ExpCard";

const Profile = (props: any) => {
  const {id}=useParams();
  const[profile,setProfile]=useState<any>({});
  useEffect(() => {
    window.scrollTo(0,0);
    getUserData(id)
        .then((res:any) => {
          setProfile(res);
        })
        .catch((err) => console.log(err));
  }, [id]);
  

  
  return (
    <>
      <div className="w-2/3">
        <div className="relative">
          <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
          <img
            className="rounded-full w-48 h-48 absolute -bottom-1/3 left-3 border-[#2d2d2d] border-8"
            src="/avatar.png"
            alt=""
          />
        </div>
        <div className="flex mt-16 justify-between items-center">
          <div className="text-2xl font-semibold">{profile.name}</div>
          <Button variant="light">Message</Button>
        </div>
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:mb-1 mb-7">
          <div className="">
            <BriefcaseBusiness /> {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="">
            <MapPin /> {profile.location}
          </div>
          <div className="">
            <Briefcase />Experience: {profile.totalExp} Years
          </div>
        </div>
        <Divider />
        <div className="mt-7 mb-7">
          <div className="text-xl font-semibold mb-2">About</div>
          <div className="">{profile.about}</div>
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
            {profile?.experiences?.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-7">
          <div className="font-semibold text-xl mb-3">Certifications</div>
          <div className="flex flex-col gap-4">
            {profile?.certifications?.map((item: any, index: any) => (
              <CertificationCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
