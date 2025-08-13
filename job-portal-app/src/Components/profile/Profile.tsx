import {
  ActionIcon,
  Avatar,
  Divider,
  FileInput,
  Indicator,
} from "@mantine/core";
import { Button, TagsInput } from "@mantine/core";
import { Pencil, Plus, Save, X } from "lucide-react";
import { useEffect, useState } from "react";
import ExpCard from "./ExpCard";

import ExpInput from "./ExpInput";
import CertificationCard from "./CertificationCard";
import CertiInput from "./CertiInput";
import { getUserData } from "../../Services/ProfileServices";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";

import { setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certification from "./Certification";

const Profile = () => {
  const dispatch = useDispatch();
  // first get the user and then give it to the useEffect
  const user = useSelector((state: any) => state.user);
  useEffect(() => {
    getUserData(user.id)
      .then((data: any) => {
        dispatch(setProfile(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-4/5 mt-5 mx-auto">
        <div className="relative">
          <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
          <div className="absolute -bottom-1/3 left-3">
            <Indicator
              className="[&_.mantine-Indicator-indicator]:!border-4 [&_img]:hover:opacity-90"
              autoContrast
              inline
              offset={30}
              label={<Pencil className="w-4/5 h-4/5 " />}
              size={45}
              position="bottom-end"
              color="#ffbd20"
              withBorder
            >
              <Avatar
                className=" !w-48  !h-48 absolute rounded-full left-3 border-[#2d2d2d] border-8"
                src="/avatar.png"
                alt=""
              />
              <FileInput
                variant="unstyled"
                size="lg"
                radius="xl"
                accept="image/png,image/jpeg"
                className="absolute font-semibold bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent"
              />
            </Indicator>
          </div>
        </div>
        {/* //top info of profile */}
        <Info />

        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Certification />
      </div>
    </>
  );
};

export default Profile;
