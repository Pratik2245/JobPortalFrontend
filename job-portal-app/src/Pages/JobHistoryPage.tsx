import { Divider } from "@mantine/core";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] px-4">
      <Divider size="xs" />
      <div className="my-5">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;
