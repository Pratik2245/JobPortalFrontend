import { jobCategory } from "../Data/Data";
import { Carousel } from "@mantine/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-[#e7e7e7] text-center">
        Browse <span className="text-[#ffbd20]">Job </span> Categories
      </div>
      <div className="test-lg text-[#b0b0b0] mb-10 mx-auto text-center w-1/2">
        Find jobs that match your skills and interests by exploring roles across
        different industries. From tech to healthcare, finance, and more — start
        your job search here.
      </div>
      <Carousel
        className="[&_button]:!bg-[#ffbd20] [&_button]:!opacity-0 hover:[&_button]:!opacity-100 focus-visible:[&_button]:!outline-none"
        nextControlIcon={<ArrowRight className="h-8 w-8" />}
        previousControlIcon={<ArrowLeft className="h-8 w-8" />}
        slideSize="22%"
        slideGap="md"
        loop
      >
        {jobCategory.map((item, index) => (
          <Carousel.Slide>
            <div
              key={index}
              className="flex items-center gap-2 flex-col w-64 border border-[#ffbd20] p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-3 transition duration-400 ease-in-out !shadow-[#ffd149]"
            >
              <div className="p-2 rounded-full bg-[#ffd149]   ">
                <img
                  className="  h-8 w-8"
                  src={`/Category/${item.name}.png`}
                  alt=""
                />
              </div>
              <div className="text-[#fff3c6] text-xl font-semibold">
                {item.name}
              </div>
              <div className="text-[#b0b0b0] text-center text-sm">
                {item.desc}
              </div>
              <div className="text-[#ffd149] text-lg">
                {item.jobs}+ new jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
