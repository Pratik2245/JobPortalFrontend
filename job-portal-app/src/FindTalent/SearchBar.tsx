import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import React, { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([0, 80]);
  return (
    <div className="flex items-center w-[100%]  px-2 gap-2 ">
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
