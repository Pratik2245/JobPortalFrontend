import { useEffect, useState } from "react";
import MostRecent from "../FindJobs/MostRecent";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../../Services/ProfileServices";

const Talents = () => {
  const [talents, setTalents] = useState<any[]>([]);
  
    useEffect(() => {
      getAllProfiles().
      then((res)=>setTalents(res)).
      catch((err)=>console.log(err))
    }, []);

    console.log("talents",talents);
    
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
