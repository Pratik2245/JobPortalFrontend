import { ActionIcon, Button, Divider, PaginationItems } from "@mantine/core";
import { AlignVerticalJustifyCenter, Bookmark, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";
const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-2/3">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-14" src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-[#b0b0b0]">
              Google &#x2022;3 Days Ago 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="#ffbd20" variant="light">
              Apply
            </Button>
          </Link>
          <Bookmark color="#ffbd20" className="cursor-pointer" />
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
        {skills.map((item, index) => (
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
      <div className="flex mb-2 justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545] p-2 rounded-xl">
            <img className="h-8" src={`/Icons/Google.png`} alt="" />
          </div>
          <div className="">
            <div className="font-medium text-lg">Google</div>
            <div className=" text-[#b0b0b0]">10k+ Employees</div>
          </div>
        </div>
        <Link to="https://www.google.com">
          <Button color="#ffbd20" variant="light" size="sm">
            Company Page
          </Button>
        </Link>
      </div>
      <div className="text-[#b0b0b0] text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        placeat nostrum neque laborum ratione culpa tempore sequi amet qui
        consequatur dolores, saepe aliquid cupiditate, odio voluptates impedit
        nihil temporibus porro mollitia! Ipsum, aliquid nesciunt. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Alias impedit voluptates,
        ratione officiis numquam soluta, commodi enim reiciendis a vero, dolore
        suscipit temporibus.
      </div>
    </div>
  );
};

export default JobDesc;
