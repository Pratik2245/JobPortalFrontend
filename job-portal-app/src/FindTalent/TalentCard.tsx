import { Button, Divider, Text } from "@mantine/core";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2 just rounded-2xl bg-[#3d3d3d] p-4 w-78 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img
              className="h-10 rounded-full"
              src={`/${props.image}.png`}
              alt=""
            />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-[#b0b0b0]">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <Heart className="cursor-pointer" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 [&>span]:py-1 [&>span]:bg-[#454545] [&>span]:text-[#ffbd20] [&>span]:rounded-lg text-xs [&>span]:px-2 mb-1">
        {props.topSkills?.map((skill: string, index: number) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <Text
        className="!text-xs !text-[#b0b0b0] !mb-3 text-justify "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider size="xs" color="#4f4f4f" />
      <div className="flex justify-between mb-2 mt-2">
        <div className="text-[#d1d1d1] text-sm font-semibold">
          {props.expectedCtc}
        </div>
        <div className="flex text-xs gap-0.5 items-center text-[#888888]">
          <MapPin size={15} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="#4f4f4f" className="mb-1" />
      <div className=" flex [&>*]:w-1/2 [&>*]:p-1 gap-2">
        <Link to="/talent-profile">
          <Button color="#ffbd20" variant="outline" fullWidth>
            Profile
          </Button>
        </Link>
        <div className="">
          <Button color="#ffbd20" variant="light" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
