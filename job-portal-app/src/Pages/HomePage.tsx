import About from "../LandingPage/About";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Working from "../LandingPage/Working";

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
