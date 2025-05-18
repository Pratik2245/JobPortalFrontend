import SearchBar from "../FindJobs/SearchBar";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <div className=" flex items-center border-t border-b border-red-[#e7e7e7] h-20">
        <SearchBar />
      </div>
    </div>
  );
};

export default FindJobs;
