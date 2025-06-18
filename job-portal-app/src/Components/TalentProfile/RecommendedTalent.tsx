import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = () => {
  return (
    <div className=" flex flex-col   w-1/3 font-semibold mb-5">
      <div className="mb-9 text-center mt-5 text-2xl">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-3 justify-center items-center">
        {talents.slice(0, 4).map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTalent;
