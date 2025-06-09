import { Avatar, Divider, Tabs } from "@mantine/core";
import { MapPin } from "lucide-react";
import AboutTab from "./Tabs/AboutTab";
import JobsTab from "./Tabs/JobsTab";
import EmployeesTab from "./Tabs/EmployeesTab";
import SimilarCompanies from "./Tabs/SimilarCompanies";

const Company = () => {
  return (
    <div className="flex gap-4">
      <div className="w-3/4">
        <div className="relative">
          <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
          <img
            className="rounded-3xl p-2 bg-[#2d2d2d] w-48 h-48 absolute -bottom-1/4 left-5 border-[#2d2d2d] border-8"
            src="/Icons/Google.png"
            alt=""
          />
        </div>
        <div className="flex mt-12 justify-between items-center">
          <div className="text-2xl font-semibold">Google</div>
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="image2.png" />
            <Avatar src="image3.png" />
            <Avatar>+5</Avatar>
          </Avatar.Group>
        </div>
        <div className="[&>div]:flex [&>div]:gap-2 [&>div]:mb-1 mb-7">
          <div className="">
            <MapPin /> New York United States
          </div>
        </div>
        <Divider my="xl" />
        <div className="">
          <Tabs variant="outline" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-[#ffbd20]">
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employees">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <AboutTab />
            </Tabs.Panel>
            <Tabs.Panel value="jobs">
              <JobsTab />
            </Tabs.Panel>
            <Tabs.Panel value="employees">
              <EmployeesTab />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
      <div className="w-1/4">
        <SimilarCompanies />
      </div>
    </div>
  );
};

export default Company;
