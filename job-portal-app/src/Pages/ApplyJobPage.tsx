import { Button } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ApplyJobForComp from "../ApplyJob/ApplyJobForComp";

const ApplyJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/job-details" className="my-4 inline-block">
        <Button leftSection={<ArrowLeft />} color="#ffbd20" variant="light">
          Back
        </Button>
      </Link>
      <ApplyJobForComp />
    </div>
  );
};

export default ApplyJobPage;
