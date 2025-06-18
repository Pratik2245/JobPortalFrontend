import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../../Data/PostedJob";

const PostedJob = () => {
  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div className="">
        <Tabs autoContrast defaultValue="active" variant="pills">
          <Tabs.List className="[&_button:[aria-selected='false']]:bg-[#3d3d3d] font-medium">
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-5 mt-5">
              {activeJobs.map((item, index) => (
                <PostedJobCard key={index} {...item} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">S</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;
