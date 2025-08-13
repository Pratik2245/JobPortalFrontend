import { useEffect, useState } from "react";
import JobCard from "../FindJobs/JobCard";
import { getAllJobs } from "../../Services/PostJobService";
import { useParams } from "react-router-dom";

const RecommendedJobs = () => {
  const { id } = useParams();
  const [jobList, setJobList] = useState<any>(null);
  // console.log(jobList);

  useEffect(() => {
    getAllJobs()
      .then((res) => setJobList(res.data))
      .catch((err) => console.log(err));
    // console.log(jobList);
  }, []);
  return (
    <div className=" flex flex-col   w-1/3 font-semibold mb-5">
      <div className="mb-9 text-center mt-5 text-2xl">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-3 justify-center items-center">
        {jobList?.map(
          (talent: any, index: number) =>
            index <= 6 && talent.id != id && <JobCard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;
