import { formatDate } from "../../Services/Utilities";

const CertificationCard = (props: any) => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="p-2 bg-[#454545] rounded-md">
            <img className="h-7 " src={`/Icons/${props.issuer}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xl font-semibold text-[#b0b0b0]">{props.issuer}</div>
          </div>
        </div>
        <div className="">
          <div className="text-sm">Issued {formatDate(props.issueDate)}</div>
          <div className="text-sm">ID:{props.certificateId}</div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
