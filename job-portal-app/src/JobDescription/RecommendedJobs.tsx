import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";
import Jobs from "../FindJobs/Jobs";

const RecommendedJobs = () => {
  return (
    <div className=" flex flex-col   w-1/3 font-semibold mb-5">
      <div className="mb-9 text-center mt-5 text-2xl">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-3 justify-center items-center">
        {jobList.slice(0, 5).map((talent, index) => (
          <JobCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
