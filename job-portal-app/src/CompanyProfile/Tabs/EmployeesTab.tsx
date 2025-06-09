import { talents } from "../../Data/TalentData";
import TalentCard from "../../FindTalent/TalentCard";

const EmployeesTab = () => {
  return (
    <div className=" mt-10 flex flex-wrap  gap-5 ">
      {talents.map((talent, index) => (
        <TalentCard key={index} {...talent} />
      ))}
    </div>
  );
};

export default EmployeesTab;
