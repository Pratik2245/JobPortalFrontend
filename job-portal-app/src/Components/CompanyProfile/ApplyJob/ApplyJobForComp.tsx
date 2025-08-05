import { Divider } from "@mantine/core";
import { timeAgo } from "../../../Services/Utilities";
import ApplyJobFrom from "./ApplyJobFrom";

const ApplyJobForComp = (props: any) => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className="text-lg text-[#b0b0b0]">
              {props.company} &bull;{timeAgo(props.postTime)} &bull;
              {props.applicant ? length : 0}
              Applicants
            </div>
          </div>
        </div>
      </div>
      <Divider my="xl" />
      <ApplyJobFrom />
    </div>
  );
};

export default ApplyJobForComp;
