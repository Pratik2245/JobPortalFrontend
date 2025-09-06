import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";

const PostedJobCard = (props: any) => {
  const { id } = useParams();
  return (
    <Link
      to={`/posted-jobs/${props.id}`}
      className={`rounded-xl p-2 border-l-2 text-[#b0b0b0] border-l-[#ffbd20] bg-[#3d3d3d] flex flex-col gap-0.5 ${
        props.id == id ? `bg-[#ffbd20] text-black` : `bg-[#3d3d3d]`
      }`}
    >
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs  font-medium">{props.location}</div>
      <div className="text-xs ">{props.jobStatus=="DRAFT"?"Drafted ":props.jobStatus=="CLOSED"?"Closed ":"Posted "}{timeAgo(props.postTime)}</div>
    </Link>
  );
};

export default PostedJobCard;
