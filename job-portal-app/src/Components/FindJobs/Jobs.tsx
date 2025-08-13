import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import MostRecent from "./MostRecent";
import { getAllJobs } from "../../Services/PostJobService";

const Jobs = () => {
  // now we are creating the job list manually
  const [jobList, setJobList] = useState([{}]);

  useEffect(() => {
    getAllJobs()
      .then((res) => setJobList(res.data))
      .catch((err) => console.log(err));
  }, []);

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
            <JobCard key={key} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
