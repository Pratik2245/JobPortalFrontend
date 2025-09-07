import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDescription/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostJobDesc = (props: any) => {
  const[tab,setTab]=useState('overview');
  const[arr,setArr]=useState([]);
  const handleTabChange = (value: string | null) => {
  if (!value) return;
  setTab(value);

  if (value === "applicants") {
    setArr(props.applicants?.filter((x: any) => x.applicationStatus === "APPLIED") || []);
  } else if (value === "invited") {
    setArr(props.applicants?.filter((x: any) => x.applicationStatus === "INTERVIEWING") || []);
  } else if (value === "offered") {
    setArr(props.applicants?.filter((x: any) => x.applicationStatus === "OFFERED") || []);
  } else if (value === "rejected") {
    setArr(props.applicants?.filter((x: any) => x.applicationStatus === "REJECT") || []);
  } else {
    setArr([]);
  }
};


  useEffect(() => {
    handleTabChange('overview')
  }, [props])
  
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
        <Tabs variant="outline" value={tab} onChange={handleTabChange}>
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
              {arr.length?arr.map((talent: any, index: any) => (
                  <TalentCard schedule key={index} {...talent} />
                )):
                <div className="text-2xl font-semibold">No Applicants Found</div>}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {arr.length?arr.map((talent: any, index: any) => (
                  <TalentCard invited key={index} {...talent} />
                )):<div className="text-2xl font-semibold">No Invited Candidates</div>}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {arr.length?arr.map((talent: any, index: any) => (
                  <TalentCard offered key={index} {...talent} />
                )):<div className="text-2xl font-semibold">No Offered Candidates</div>}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="rejected">
            <div className=" mt-10 flex flex-wrap  gap-5 ">
              {arr.length?arr.map((talent: any, index: any) => (
                  <TalentCard rejected key={index} {...talent} />
                )):<div className="text-2xl font-semibold">No Rejected Candidates</div>}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostJobDesc;
