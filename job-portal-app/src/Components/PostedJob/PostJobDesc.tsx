import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDescription/JobDesc";
import TalentCard from "../FindTalent/TalentCard";

const PostJobDesc = (props: any) => {
  return (
    <div className="w-3/4">
      <div className="text-2xl font-semibold  flex items-center gap-3">
        {props.jobTitle}
        <Badge variant="light" color="#ffbd20">
          {props.jobStatus}
        </Badge>
      </div>
      <div className="text-[#b0b0b0] font-medium mb-5">{props.location}</div>
      {/* Tabs  */}
      <div className="">
        <Tabs variant="outline" defaultValue={"overview"}>
          <Tabs.List className="[&_button]:!text-lg font-medium mb-5 [&_button[data-active='true']]:!text-[#ffbd20]">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
           {props.jobStatus=="CLOSED"?<JobDesc {...props} close edit />:<JobDesc {...props} edit />} 
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {props.applicants
                ?.filter((x: any) => x.applicationStatus === "APPLIED")
                .map((talent: any, index: any) => (
                  <TalentCard schedule key={index} {...talent} />
                ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {props.applicants
                ?.filter((x: any) => x.applicationStatus === "INTERVIEWING")
                .map((talent: any, index: any) => (
                  <TalentCard invited key={index} {...talent} />
                ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {props.applicants
                ?.filter((x: any) => x.applicationStatus === "OFFERED")
                .map((talent: any, index: any) => (
                  <TalentCard offered key={index} {...talent} />
                ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="rejected">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {props.applicants
                ?.filter((x: any) => x.applicationStatus === "REJECT")
                .map((talent: any, index: any) => (
                  <TalentCard rejected key={index} {...talent} />
                ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostJobDesc;
