import { Button, Divider, Text } from "@mantine/core";
import { Bookmark, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Card = (props: any) => {
  return (
    <Link
      to="/job-details"
      className="flex flex-col gap-2 rounded-2xl bg-[#3d3d3d] p-4 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149"
    >
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
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
        <Bookmark
          className="cursor-pointer"
          color="#ffbd20"
          fill={props.saved ? "#ffbd20" : "none"}
        />
      </div>
      <div className="flex items-center justify-between gap-2 [&>div]:py-1  [&>div]:bg-[#454545] [&>div]:text-[#ffbd20] [&>div]:rounded-lg text-xs [&>div]:px-2 ] mb-1">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        className="!text-xs !text-[#b0b0b0] !mb-3 text-justify "
        lineClamp={3}
      >
        {props.description}
      </Text>
      <Divider size="xs" color="#4f4f4f" />
      <div className="flex justify-between mb-2">
        <div className="text-[#d1d1d1] text-sm">&#8377;{props.package}</div>
        <div className="flex text-sm gap-1 items-center text-[#888888]">
          <Clock size={13} />
          {props.applied
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : "Posted "}{" "}
          {props.postedDaysAgo} Month Ago
        </div>
      </div>
      <Divider size="xs" color="#4f4f4f" />
      {props.offered ? (
        <div className="flex gap-2">
          <Button variant="outline" radius="sm" color="#ffbd20" fullWidth>
            Accept
          </Button>
          <Button variant="light" radius="sm" color="#ffbd20" fullWidth>
            Decline
          </Button>
        </div>
      ) : props.interviewing ? (
        <div className="flex items-center gap-2  text-[#d1d1d1] text-sm ">
          <CalendarDays className=" text-[#ffbd20] w-5 h-5" /> Sun 25 August
          &bull;
          <span className="text-[#888888]">10:00 AM</span>
        </div>
      ) : (
        <Button variant="light" radius="sm" color="#ffbd20">
          View Job
        </Button>
      )}
    </Link>
  );
};

export default Card;
