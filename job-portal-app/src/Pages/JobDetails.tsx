import { Button, Divider } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDescription/JobDesc";
import RecommendedJobs from "../JobDescription/RecommendedJobs";

const JobDetails = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/find-jobs" className="my-4 inline-block">
        <Button leftSection={<ArrowLeft />} color="#ffbd20" variant="light">
          Back
        </Button>
      </Link>
      <div className="flex gap-2 justify-around">
        <JobDesc />
        <div className="">hello</div>
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDetails;
