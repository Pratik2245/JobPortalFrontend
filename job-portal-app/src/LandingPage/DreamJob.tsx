import { Avatar, TextInput } from "@mantine/core";
import { Search } from "lucide-react";
const DreamJob = () => {
  return (
    <div className="flex items-center px-20 pt-10 ">
      {/* right  */}
      <div className="w-[50%] flex flex-col gap-3">
        <div className="text-7xl font-bold text-[#e7e7e7]">
          Find Your <span className="text-[#ffbd20]">Dream Job</span> With Us
        </div>
        <div className="text-lg text-[#e7e7e7]">
          "Find the Right Talent, Faster."Our job provider platform helps
          employers connect with skilled candidates quickly and easily. Post job
          openings, manage applications, and streamline your hiring process—all
          in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-[#3d3d3d] text-[#e7e7e7]  rounded-lg p-1 px-2 [&_input]:!text-[#e7e7e7]"
            variant="unstyled"
            label="Job Title"
            placeholder="Full Time"
          />
          <TextInput
            className=" bg-[#3d3d3d] text-[#e7e7e7] p-1 px-2 rounded-lg [&_input]:!text-[#e7e7e7]"
            variant="unstyled"
            label="Job Type"
            placeholder="Full-Part Time"
          />
          <div className="h-full w-20 flex justify-center bg-[#ffbd20] rounded-lg text-[#e7e7e7] items-center cursor-pointer p-1.5 hover:bg-[#f99b07]">
            <Search className="h-[85%] w-[85%] " />
          </div>
        </div>
      </div>
      {/* left  */}
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-[30rem] mt-6 relative">
          <img src="Boy.png" alt="" />
          <div className="absolute w-fit top-[50%] -right-10 border-[#ffbd20] border p-2 rounded-lg backdrop-blur-md">
            <div className=" text-center text-[#e7e7e7] ">10K+ got job</div>
            <Avatar.Group>
              <Avatar src="avatar1.png" />
              <Avatar src="image2.png" />
              <Avatar src="image3.png" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>

          {/* //second card  */}
          <div className="w-[40%] flex flex-col gap-2  p-2 text-sm backdrop-blur-md absolute top-[30%] right-[65%] rounded-lg border-[#ffbd20] border">
            <div className="flex gap-2 items-center text-[#e7e7e7]">
              <img
                className="w-8 h-8 bg-[#6d6d6d] p-1 rounded-lg"
                src="Google.png"
                alt=""
              />
              <div className="">
                <div>Software Engineer</div>
                <div>New York</div>
              </div>
            </div>
            <div className="flex justify-between text-[#d1d1d1] text-xs">
              <div>1 day ago</div>
              <div>120 Applicants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
