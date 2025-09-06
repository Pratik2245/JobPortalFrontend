import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useMemo, useState } from "react";

const PostedJob = (props: any) => {
  useEffect(() => {
    setActiveTab(props.job?.jobStatus || "ACTIVE");
  }, [props.job]);

  const [activeTab, setActiveTab] = useState<string | any>("ACTIVE");

  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div className="">
        <Tabs
          autoContrast
          value={activeTab}
          onChange={setActiveTab}
          variant="pills"
        >
          <Tabs.List className="[&_button:[aria-selected='false']]:bg-[#3d3d3d] font-medium">
            <Tabs.Tab value="ACTIVE">
              Active [
              {
                props.jobList?.filter((job: any) => job?.jobStatus === "ACTIVE")
                  .length
              }
              ]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT">
              Drafts [
              {
                props.jobList?.filter((job: any) => job?.jobStatus === "DRAFT")
                  .length
              }
              ]
            </Tabs.Tab>
            <Tabs.Tab value="CLOSED">
              Closed [
              {
                props.jobList?.filter((job: any) => job?.jobStatus === "CLOSED")
                  .length
              }
              ]
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab}>
            <div className="flex flex-col gap-5 mt-5">
              {props.jobList
                ?.filter((job: any) => job?.jobStatus === activeTab)
                .map((item: any, key: number) => (
                  <PostedJobCard key={key} {...item} />
                ))}
            </div>
          </Tabs.Panel>
          {/* <Tabs.Panel value="draft">S</Tabs.Panel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;
