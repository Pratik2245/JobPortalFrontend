import Header from "../Header/Header";
import About from "../LandingPage/About";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import Footer from "../LandingPage/Footer";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Working from "../LandingPage/Working";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins']">
        <Header />
        <DreamJob />
        <Companies />
        <JobCategory />
        <Working />
        <About />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
