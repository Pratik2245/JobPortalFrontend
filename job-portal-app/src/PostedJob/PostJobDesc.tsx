import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDescription/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostJobDesc = () => {
  return (
    <div className="w-3/4">
      <div className="text-2xl font-semibold  flex items-center gap-3">
        Software Engineer
        <Badge variant="light" color="#ffbd20">
          Badge
        </Badge>
      </div>
      <div className="text-[#b0b0b0] font-medium mb-5">
        New York United States
      </div>
      {/* Tabs  */}
      <div className="">
        <Tabs variant="outline" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-lg font-medium mb-5 [&_button[data-active='true']]:!text-[#ffbd20]">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {talents.map((talent, index) => (
                <TalentCard schedule key={index} {...talent} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {talents.map((talent, index) => (
                <TalentCard invited key={index} {...talent} />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostJobDesc;
