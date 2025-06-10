import { ActionIcon } from "@mantine/core";
import { ExternalLink } from "lucide-react";

const CompanyCard = (props: any) => {
  return (
    <div className=" bg-[#3d3d3d] rounded-lg flex justify-between items-center gap-5 mb-2 p-3">
      {/* LEFT SIDE: logo + info */}
      <div className="flex items-center gap-4">
        <div className="p-2 bg-[#454545] rounded-md">
          <img className="h-7" src={`/Icons/${props.name}.png`} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{props.name}</div>
          <div className="text-xs text-[#b0b0b0]">
            {props.company} &#x2022; {props.employees} Applicants
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: external link icon */}
      <ActionIcon variant="subtle" aria-label="Settings">
        <ExternalLink
          color="#ffbd20"
          style={{ width: "100%", height: "100%" }}
        />
      </ActionIcon>
    </div>
  );
};

export default CompanyCard;
