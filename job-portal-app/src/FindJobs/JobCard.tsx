import { Bookmark } from "lucide-react";

const JobCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#3d3d3d] p-4 w-72 ">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="bg-[#454545]">
            <img className="h-7" src="/Icons/Microsoft.png" alt="" />
          </div>
          <div className="">
            <div className="font-semibold">Developer</div>
            <div className="text-xs text-[#b0b0b0]">
              Amazon &#x2022; 6 Applicants
            </div>
          </div>
        </div>
        <Bookmark />
      </div>
      <div className="flex items-center justify-between gap-2 [&>div]:py-1  [&>div]:bg-[#454545] [&>div]:text-[#ffbd20] [&>div]:rounded-lg text-xs [&>div]:px-2">
        <div>Intermediate</div>
        <div>Full Time</div>
        <div>New York</div>
      </div>
      <div className="text-sm mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus
        provident eos!
      </div>
      <div className="flex justify-between [&>div]:text-[#ffbd20]">
        <div>33 LPA</div>
        <div>Posted 1 Month Ago</div>
      </div>
      <div className="border rounded-2xl bg-[#fffbeb] text-[#ffbd20] text-center ">
        View Job
      </div>
    </div>
  );
};

export default JobCard;
