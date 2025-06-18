import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl font-semibold text-[#e7e7e7] text-center">
        Trusted By <span className="text-[#ffbd20]">1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true}>
        {companies.map((item, index) => (
          <div
            key={index}
            className="m-8 px-2 py-2 hover:bg-[#6d6d6d] rounded-xl cursor-pointer"
          >
            <img className="h-14" src={`/Companies/${item}.png`} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
