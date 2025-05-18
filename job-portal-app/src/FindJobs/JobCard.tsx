import { Bookmark } from "lucide-react";

const JobCard = () => {
  return (
    <div className="bg-[#3d3d3d] p-4 w-72 ">
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
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[#b0b0b0] ">
        <div>Intermediate</div>
        <div>Full Time</div>
        <div>New York</div>
      </div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus
        provident eos!
      </div>
      <div className="">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default JobCard;
