import { TextInput } from "@mantine/core";
const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
      {/* right  */}
      <div className="w-[50%] flex flex-col gap-3">
        <div className="text-7xl font-bold text-[#e7e7e7]">
          Find Your <span className="text-[#ffbd20]">Dream Job</span> With Us
        </div>
        <div className="text-lg text-[#e7e7e7]">
          "Find the Right Talent, Faster." Our job provider platform helps
          employers connect with skilled candidates quickly and easily. Post job
          openings, manage applications, and streamline your hiring process—all
          in one place.
        </div>
        <div className="flex gap-3">
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
            placeholder="Input"
          />
        </div>
      </div>
      {/* left  */}
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-[35rem]">
          <img src="Boy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
