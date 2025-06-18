import { similar } from "../../../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className=" flex flex-col gap-7">
      <div className="text-xl text-center font-semibold mt-5">
        Similar Companies
      </div>
      <div className="flex flex-col  flex-wrap gap-3 ">
        {similar.map((companies, index) => (
          <CompanyCard key={index} {...companies} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;
