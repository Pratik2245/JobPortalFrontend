import { Link } from "react-router-dom";
import PostedJob from "../PostedJob/PostedJob";
import PostJobDesc from "../PostedJob/PostJobDesc";

const PostedJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] px-4">
      <Link to="/job-details" className="my-4 inline-block"></Link>

      <div className="flex gap-5 ">
        <PostedJob />
        <PostJobDesc />
      </div>
    </div>
  );
};

export default PostedJobPage;
