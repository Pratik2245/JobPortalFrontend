
import { useParams } from "react-router-dom";
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = (props:any) => {
 
  const {id}=useParams();
  
  return (
    <div className=" flex flex-col   w-1/3 font-semibold mb-5">
      <div className="mb-9 text-center mt-5 text-2xl">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-3 justify-center items-center">
        {props?.talent?.slice(0, 4).map((talent:any, index:any) => (
          id!=talent.id&&
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTalent;
