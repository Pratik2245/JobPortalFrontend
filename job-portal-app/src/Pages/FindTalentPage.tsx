import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
    </div>
  );
};

export default FindTalentPage;
