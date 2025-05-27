import { Button, Divider } from "@mantine/core";
import { Briefcase, BriefcaseBusiness, MapPin } from "lucide-react";
import ExpCard from "../FindTalent/ExpCard";
import CertificationCard from "../FindTalent/CertificationCard";

const Profile = () => {
  return (
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
        <div className="text-2xl font-semibold">Pratik</div>
        <Button variant="light">Message</Button>
      </div>
      <div className="[&>div]:flex [&>div]:gap-2 [&>div]:mb-1 mb-7">
        <div className="">
          <BriefcaseBusiness /> Developer NetFlix
        </div>
        <div className="">
          <MapPin /> Delhi
        </div>
        <div className="">
          <Briefcase /> Experience: 2 Years
        </div>
      </div>
      <Divider />
      <div className="mt-7 mb-7">
        <div className="text-xl font-semibold mb-2">About</div>
        <div className="">
          I am a Full Stack Developer At NetFlix Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolor officia est animi, suscipit soluta
          dignissimos, doloremque vitae aperiam, unde magni numquam odio
          molestias sed dolorum nostrum? Est, alias? Quis iure a doloremque,
          eius ad minus?
        </div>
      </div>
      <Divider />
      <div className="mt-7 mb-7">
        <div className="text-xl font-semibold mb-4">Skills</div>
        <div className="flex  gap-3 ">
          <Button variant="light" radius="xl" color="#ffbd20">
            React
          </Button>
          <Button variant="light" radius="xl" color="#ffbd20">
            Angular
          </Button>
          <Button variant="light" radius="xl" color="#ffbd20">
            Spring
          </Button>
          <Button variant="light" radius="xl" color="#ffbd20">
            MySql
          </Button>
        </div>
      </div>
      <Divider />
      <div className="mt-7">
        <div className="font-semibold text-xl mb-3">Experience</div>
        <ExpCard />
      </div>
      <Divider />
      <div className="mt-7">
        <div className="font-semibold text-xl mb-3">Certifications</div>
        <CertificationCard />
      </div>
    </div>
  );
};

export default Profile;
