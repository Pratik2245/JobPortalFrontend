import JobCard from "../FindJobs/JobCard";
import Jobs from "../FindJobs/Jobs";
import SearchBar from "../FindJobs/SearchBar";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <div className=" flex items-center border-t border-b border-[#4f4f4f] h-20">
        <SearchBar />
      </div>
      <Jobs />
    </div>
  );
};

export default FindJobs;
