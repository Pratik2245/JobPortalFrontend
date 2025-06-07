import { Button, Divider } from "@mantine/core";
import { ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/job-details" className="my-4 inline-block">
        <Button
          leftSection={<ArrowLeftToLine />}
          color="#ffbd20"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <Divider size="xs" />
      <div className="flex justify-between gap-5"></div>
    </div>
  );
};

export default CompanyPage;
