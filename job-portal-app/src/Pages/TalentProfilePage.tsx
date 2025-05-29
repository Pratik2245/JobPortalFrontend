import { Button, Divider } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/find-talent" className="my-4 inline-block">
        <Button leftSection={<ArrowLeft />} color="#ffbd20" variant="light">
          Back
        </Button>
      </Link>
      <Divider size="xs" />
      <div className="flex justify-between gap-5">
        <Profile {...profile} />
        <RecommendedTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
