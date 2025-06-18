import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";

const About = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold mb-3 text-[#e7e7e7] text-center">
        What Users <span className="text-[#ffbd20]">Say </span> About Us
      </div>
      <div className="flex justify-evenly">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[23%] border gap-2 border-[#ffbd20] p-3 rounded-xl mt-10"
          >
            <div className="flex items-center gap-3">
              <Avatar src="avatar1.png" className="!h-14 !w-14" />
              <div className="">
                <div className="text-lg text-[#e7e7e7]">{item.name}</div>
                <Rating value={item.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-[#a7a3a3]">{item.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
