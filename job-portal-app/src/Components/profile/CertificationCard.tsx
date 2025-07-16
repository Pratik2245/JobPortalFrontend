import { ActionIcon } from "@mantine/core";
import { Trash } from "lucide-react";
import { formatDate } from "../../Services/Utilities";

const CertificationCard = (props: any) => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img className="h-7 " src={`/Icons/${props.issuer}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.name}</div>
            <div className="text-xs text-[#b0b0b0]">{props.issuer}</div>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <div className="">
            <div className="text-sm">Issued {formatDate(props.issueDate)}</div>
            <div className="text-sm">ID:{props.certificateId}</div>
          </div>
          {props.edit && (
            <ActionIcon variant="transparent" color="red.8" size="lg">
              <Trash
                strokeWidth={2.5}
                style={{ width: "70%", height: "70%" }}
              />
            </ActionIcon>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
