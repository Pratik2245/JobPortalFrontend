import { formatDate } from "../../Services/Utilities";

const ExpCard = (props: any) => {  
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] rounded-full">
            <img className="h-7 " src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.title}</div>
            <div className="text-xs text-[#b0b0b0]">
              {props.company} &#183;{props.location}
            </div>
          </div>
        </div>
        <div className="text-sm">
          {formatDate(props.startDate)} &#45;{formatDate(props.endDate)}
        </div>
      </div>
      <div className="mb-7 text-sm text-justify">{props.description}</div>
    </>
  );
};

export default ExpCard;
