import { Divider, Text } from "@mantine/core";
import { Bookmark, Clock } from "lucide-react";

const JobCard = (props: any) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#3d3d3d] p-4 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="bg-[#454545]">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-[#b0b0b0]">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <Bookmark className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between gap-2 [&>div]:py-1  [&>div]:bg-[#454545] [&>div]:text-[#ffbd20] [&>div]:rounded-lg text-xs [&>div]:px-2 ]">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        className="!text-xs !text-[#b0b0b0] mb-2 text-justify"
        lineClamp={3}
      >
        {props.description}
      </Text>
      <Divider size="xs" color="#4f4f4f" />
      <div className="flex justify-between">
        <div className="text-[#d1d1d1] font-semibold">
          &#8377;{props.package}
        </div>
        <div className="flex text-sm gap-1 items-center text-[#888888]">
          <Clock size={15} /> Posted {props.postedDaysAgo} Month Ago
        </div>
      </div>
      <div className="border rounded-2xl bg-[#fffbeb] text-[#ffbd20] text-center ">
        View Job
      </div>
    </div>
  );
};

export default JobCard;
