import SearchBar from "../Components/FindJobs/SearchBar";
import Jobs from "../Components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <div className=" flex items-center  border-b border-[#4f4f4f] h-20">
        <SearchBar />
      </div>
      <Jobs />
    </div>
  );
};

export default FindJobs;
