import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";
import MostRecent from "./MostRecent";

const Jobs = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between p-3 mt-5">
          <div className="text-2xl font-semibold">Recommended Jobs</div>
          <div>
            <MostRecent />
          </div>
        </div>
        <div className=" mt-10 flex flex-wrap gap-5 justify-around">
          {jobList.map((job, key) => (
            <JobCard kwy={key} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
