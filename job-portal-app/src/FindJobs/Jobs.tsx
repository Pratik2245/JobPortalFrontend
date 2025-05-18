import JobCard from "./JobCard";
import MostRecent from "./MostRecent";

const Jobs = () => {
  return (
    <>
      <div className="flex justify-between p-3 mt-5">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <div>
          <MostRecent />
        </div>
      </div>
      <JobCard />
    </>
  );
};

export default Jobs;
