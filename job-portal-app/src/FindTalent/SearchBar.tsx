import { Divider, Input, RangeSlider } from "@mantine/core";
import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { CircleUser } from "lucide-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 80]);
  return (
    <div className="flex items-center w-[100%]  px-5  py-8 gap-2 ">
      <div className="text-[#ffbd20] items-center bg-[#3d3d3d] rounded-full p-1 flex">
        <CircleUser size={25} />
      </div>
      <Input
        className="[&_input]:!placeholder-[#e7e7e7] text-xl"
        variant="unstyled"
        placeholder="Talent Name"
      />
      {searchFields.map((values, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <MultiInput {...values} />
          </div>
          <Divider size="sm" orientation="vertical" />
        </React.Fragment>
      ))}
      <div className="w-1/5 flex flex-col gap-1 [&_.mantine-Slider-label]:translate-y-5">
        <div className="flex justify-between text-sm">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377; {value[1]} LPA
          </div>
        </div>
        <RangeSlider
          color="#ffbd20"
          size="sm"
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
