import { Button, Divider } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import RecommendedTalent from "../Components/TalentProfile/RecommendedTalent";
import { useEffect, useState } from "react";
import { getUserData } from "../Services/ProfileServices";

const TalentProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getUserData(id)
        .then((res) => setProfileData(res))
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [id]);
  console.log(profileData);
  

  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] p-4">
      <Link to="/find-talent" className="my-4 inline-block">
        <Button
          leftSection={<ArrowLeft />}
          onClick={() => navigate(-1)}
          color="#ffbd20"
          variant="light"
        >
          Back
        </Button>
      </Link>

      <Divider size="xs" />

      <div className="flex justify-between gap-5">
        {profileData ? (
          <Profile {...profileData} />   
        ) : (
          <div className="text-white text-lg">Loading profile...</div>
        )}
        <RecommendedTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
