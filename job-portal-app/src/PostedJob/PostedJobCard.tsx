const PostedJobCard = (props: any) => {
  return (
    <div className="rounded-xl p-2 border-l-2 border-l-[#ffbd20] bg-[#3d3d3d] flex flex-col gap-0.5">
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs text-[#b0b0b0] font-medium">{props.location}</div>
      <div className="text-xs text-[#b0b0b0]">{props.posted}</div>
    </div>
  );
};

export default PostedJobCard;
