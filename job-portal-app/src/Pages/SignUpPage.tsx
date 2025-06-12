import { Divider } from "@mantine/core";
import { Anchor } from "lucide-react";

const SignUpPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] ">
      <Divider size="xs" mx="md" />
      <div className="w-[100vw] h-[100vh]">
        <div className="w-1/2  h-full bg-[#3d3d3d] rounded-r-[200px]">
          <div className="flex items-center text-[#ffbd20] gap-2">
            <Anchor size={35} />
            <span className="font-bold text-3xl">JobSparks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
