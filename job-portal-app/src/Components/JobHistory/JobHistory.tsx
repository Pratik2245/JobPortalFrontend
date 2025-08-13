import { Tabs } from "@mantine/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/PostJobService";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Services/ProfileServices";
import { setProfile } from "../../Slices/ProfileSlice";

const JobHistory = () => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [activeTab, setActiveTab] = useState("APPLIED");
  const [jobListData, setJobListData] = useState<any>([]);
  const [showList, setShowList] = useState<any>([]);
  useEffect(() => {
    if (!profile?.id && user?.id) {
      getUserData(user.id)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((err) => console.error(err));
    }
  }, [profile?.id, user?.id, dispatch]);
  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobListData(res.data);

        setShowList(
          res.data.filter(
            (job: any) =>
              job.applicants?.filter(
                (applicant: any) =>
                  applicant.applicantId === user.id &&
                  applicant.applicationStatus == "APPLIED"
              ).length > 0
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleTabChange = (value: string | any) => {
    setActiveTab(value);
    if (value == "SAVED") {
      setShowList(
        jobListData.filter((job: any) => profile.savedJobs?.includes(job.id))
      );
    } else {
      setShowList(
        jobListData.filter(
          (job: any) =>
            job.applicants?.filter(
              (applicant: any) =>
                applicant.applicantId == user.id &&
                applicant.applicationStatus == value
            ).length > 0
        )
      );
    }
  };
  return (
    <div>
      <div className="text-2xl font-semibold mb-5 ">Job History</div>
      <Tabs variant="outline" value={activeTab} onChange={handleTabChange}>
        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:!text-[#ffbd20]">
          <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
          <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
          <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
          <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={activeTab}>
          <div className=" mt-10 flex flex-wrap gap-5 justify-around">
            {showList?.map((job: any, key: any) => (
              <Card applied key={key} {...job} activeTab={activeTab} />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default JobHistory;
