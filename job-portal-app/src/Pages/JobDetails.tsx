import { Button, Divider } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "../Components/JobDescription/JobDesc";
import RecommendedJobs from "../Components/JobDescription/RecommendedJobs";
import { useEffect, useState } from "react";
import { getJobById } from "../Services/PostJobService";

const JobDetails = () => {
  const { id } = useParams();
  const [resData, setResData] = useState<any>(null);
  useEffect(() => {
    getJobById(id)
      .then((res) => setResData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/find-jobs" className="my-4 inline-block">
        <Button leftSection={<ArrowLeft />} color="#ffbd20" variant="light">
          Back
        </Button>
      </Link>
      <div className="flex gap-2 justify-around">
        <JobDesc {...resData} />
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDetails;
