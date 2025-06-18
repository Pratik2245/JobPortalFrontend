import { Tabs } from "@mantine/core";
import { jobList } from "../../Data/JobsData";
import Card from "./Card";

const JobHistory = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5 ">Job History</div>
      <Tabs variant="outline" defaultValue="applied">
        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-[#ffbd20]">
          <Tabs.Tab value="applied">Applied</Tabs.Tab>
          <Tabs.Tab value="saved">Saved</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="applied">
          <div className=" mt-10 flex flex-wrap gap-5 justify-around">
            {jobList.map((job, key) => (
              <Card applied key={key} {...job} />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="saved">
          <div className=" mt-10 flex flex-wrap gap-5 justify-around">
            {jobList.map((job, key) => (
              <Card saved key={key} {...job} />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="offered">
          <div className=" mt-10 flex flex-wrap gap-5 justify-around">
            {jobList.map((job, key) => (
              <Card offered key={key} {...job} />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="interviewing">
          <div className=" mt-10 flex flex-wrap gap-5 justify-around">
            {jobList.map((job, key) => (
              <Card interviewing key={key} {...job} />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default JobHistory;
