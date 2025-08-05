import { ActionIcon, Button, Divider } from "@mantine/core";
import {
  Bookmark,
  BriefcaseBusiness,
  CircleDollarSign,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { timeAgo } from "../../Services/Utilities";
const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(props.description);
  const card = [
    { name: "Location", icon: MapPin, value: props.location },
    { name: "Experience", icon: BriefcaseBusiness, value: props.experience },
    {
      name: "Salary",
      icon: CircleDollarSign,
      value: props.packageOffered + "LPA",
    },
    { name: "Job Type", icon: Star, value: props.jobType },
  ];
  return (
    <div className="w-2/3">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-14" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className="text-lg text-[#b0b0b0]">
              {props.company} &#x2022;{timeAgo(props.postTime)}{" "}
              {props.applicants ? length : 0}
              Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to={`/apply-job/${props.id}`}>
            <Button color="#ffbd20" variant="light">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button color="red.5" variant="outline">
              Delete
            </Button>
          ) : (
            <Bookmark color="#ffbd20" className="cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <ActionIcon
              variant="light"
              color="#ffbd20"
              size="xl"
              radius="xl"
              aria-label="Settings"
            >
              <item.icon className="w-3/5 h-3/5" />
            </ActionIcon>
            <div className="text-sm text-[#b0b0b0]">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div className="">Required Skills</div>
      <div className="flex gap-2 flex-wrap">
        {props.skillsRequired?.map((item: any, index: number) => (
          <ActionIcon
            variant="light"
            color="#ffbd20"
            key={index}
            className="!h-fit font-medium !w-fit !text-sm"
            radius="xl"
            p="xs"
            aria-label="Settings"
          >
            {item}
          </ActionIcon>
        ))}
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_*]:text-[#b0b0b0] [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-[#d1d1d1] [&_p]:text-justify [&_li]:mb-1 [&_li]:marker:text-[#ffbd20]"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div className="mb-4">About Company</div>
      <div className="flex mb-2 justify-between ">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-8" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-medium text-lg">{props.company}</div>
            <div className=" text-[#b0b0b0]">10k+ Employees</div>
          </div>
        </div>
        <Link to={`/company/${props.company}`}>
          <Button color="#ffbd20" variant="light" size="sm">
            Company Page
          </Button>
        </Link>
      </div>
      <div className="text-[#b0b0b0] text-justify">{props.about}</div>
    </div>
  );
};

export default JobDesc;
