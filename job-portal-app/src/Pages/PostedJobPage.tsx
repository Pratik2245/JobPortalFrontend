import { Link, useNavigate, useParams } from "react-router-dom";
import PostedJob from "../Components/PostedJob/PostedJob";
import PostJobDesc from "../Components/PostedJob/PostJobDesc";
import { useEffect, useState } from "react";
import { getPostedJob } from "../Services/PostJobService";
import { useSelector } from "react-redux";

const PostedJobPage = () => {
  const { id } = useParams();
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const [job, setJob] = useState<any>({});
  const [jobList, setJobsList] = useState<any>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getPostedJob(user.id)
      .then((res) => {
        setJobsList(res.data);
        if (res.data && res.data.length > 0 && Number(id) == 0)
          navigate(`/posted-jobs/${res.data[0].id}`);
        setJob(res.data.find((job: any) => job.id == id) || {});
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, user.id]);
  // console.log("res=", jobList);
  // console.log(jobList);

  return (
    <div className="min-h-[100vh] bg-[#2d2d2d] font-['poppins'] px-4">
      <Link to="/job-details" className="my-4 inline-block"></Link>

      <div className="flex gap-5 ">
        <PostedJob job={job} jobList={jobList} />
        <PostJobDesc {...job} />
      </div>
    </div>
  );
};

export default PostedJobPage;
