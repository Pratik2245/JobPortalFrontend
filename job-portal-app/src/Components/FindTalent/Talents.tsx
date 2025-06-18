import { talents } from "../../Data/TalentData";
import MostRecent from "../FindJobs/MostRecent";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between p-3 mt-5">
          <div className="text-2xl font-semibold">Talents</div>
          <div>
            <MostRecent />
          </div>
        </div>
        <div className=" mt-10 flex flex-wrap  gap-5 ">
          {talents.map((talent, index) => (
            <TalentCard key={index} {...talent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Talents;
