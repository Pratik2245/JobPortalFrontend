import { Button, Divider } from "@mantine/core";
import { ArrowLeft, ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";
import Company from "../CompanyProfile/Company";

const CompanyPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/job-details" className="my-4 inline-block">
        <Button leftSection={<ArrowLeft />} color="#ffbd20" variant="light">
          Back
        </Button>
      </Link>

      <div className="flex  gap-5">
        <Company />
      </div>
    </div>
  );
};

export default CompanyPage;
