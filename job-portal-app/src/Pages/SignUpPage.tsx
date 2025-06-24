import { Anchor, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignUpLogin/Login";
import SignUp from "../Components/SignUpLogin/SignUp";
import { Button } from "@mantine/core";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-[#2d2d2d] font-['poppins'] overflow-hidden  ">
      <Button
        size="sm"
        className="!absolute left-5 z-10"
        my="lg"
        variant="light"
        color="#ffbd20"
        onClick={() => navigate("/")}
        leftSection={<ArrowLeft size={20} />}
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] flex transition-all duration-1000 ease-in-out [&>*]:flex-shrink-0 ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        } `}
      >
        <Login />

        <div
          className={`w-1/2  h-full bg-[#3d3d3d] transition-all duration-1000 ease-in-out  ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          } flex items-center flex-col justify-center gap-3`}
        >
          <div className="flex items-center text-[#ffbd20] gap-2">
            <Anchor className="h-16 w-16" size={35} />
            <span className="font-bold text-6xl">JobSparks</span>
          </div>
          <div className="text-[#d1d1d1] font-semibold text-2xl">
            Find the jobs made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
