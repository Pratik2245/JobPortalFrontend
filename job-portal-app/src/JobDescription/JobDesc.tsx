import { Bookmark } from "lucide-react";

const JobDesc = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-[#b0b0b0]">
              Google &#x2022; 48 Applicants
            </div>
          </div>
        </div>
        <Bookmark className="cursor-pointer" />
      </div>
    </div>
  );
};

export default JobDesc;
