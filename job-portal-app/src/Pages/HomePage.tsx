import About from "../Components/LandingPage/About";
import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import JobCategory from "../Components/LandingPage/JobCategory";
import Subscribe from "../Components/LandingPage/Subscribe";
import Working from "../Components/LandingPage/Working";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[200vh] bg-[#2d2d2d] font-['poppins']">
        <DreamJob />
        <Companies />
        <JobCategory />
        <Working />
        <About />
        <Subscribe />
      </div>
    </>
  );
};

export default HomePage;
