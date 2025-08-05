import { Button } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyJobForComp from "../Components/CompanyProfile/ApplyJob/ApplyJobForComp";
import { useEffect, useState } from "react";
import { getJobById } from "../Services/PostJobService";

const ApplyJobPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [resData, setResData] = useState<any>(null);
  useEffect(() => {
    getJobById(id)
      .then((res) => setResData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Button
        leftSection={<ArrowLeft />}
        onClick={() => navigate(-1)}
        color="#ffbd20"
        variant="light"
      >
        Back
      </Button>
      <ApplyJobForComp {...resData} />
    </div>
  );
};

export default ApplyJobPage;
