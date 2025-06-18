import { jobList } from "../../../Data/JobsData";
import JobCard from "../../FindJobs/JobCard";

const JobsTab = () => {
  return (
    <div className=" mt-10 flex flex-wrap gap-5 justify-around">
      {jobList.map((job, key) => (
        <JobCard kwy={key} {...job} />
      ))}
    </div>
  );
};

export default JobsTab;
