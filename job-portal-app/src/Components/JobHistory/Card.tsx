import { Button, Divider, Text } from "@mantine/core";
import { Bookmark, CalendarDays, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeProfile } from "../../Slices/ProfileSlice";
import { FaBookmark } from "react-icons/fa";
import { timeAgo } from "../../Services/Utilities";

const Card = (props: any) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const handleSaveJobs = () => {
    if (!profile?.id) {
      console.warn("Profile not loaded yet, cannot save job.");
      return;
    }

    let savedJobs: any = [...(profile.savedJobs || [])];
    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id: any) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }
    const updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(changeProfile(updatedProfile));
  };
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-[#3d3d3d] p-4 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#3b331b">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545]">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-[#b0b0b0]">
              {props.company} &#x2022;{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        {!profile?.savedJobs?.includes(props.id) ? (
          <Bookmark
            onClick={handleSaveJobs}
            className="cursor-pointer hover:text-[#ffbd20]"
          />
        ) : (
          <FaBookmark
            size={20}
            onClick={handleSaveJobs}
            className="cursor-pointer text-[#ffbd20] hover:text-[#ffbd20]"
          />
        )}
      </div>
      <div className="flex items-center justify-between gap-2 [&>div]:py-1  [&>div]:bg-[#454545] [&>div]:text-[#ffbd20] [&>div]:rounded-lg text-xs [&>div]:px-2 ] mb-1">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        className="!text-xs !text-[#b0b0b0] !mb-3 text-justify "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider size="xs" color="#4f4f4f" />
      <div className="flex justify-between mb-2">
        <div className="text-[#d1d1d1] text-sm">
          &#8377;{props.packageOffered}LPA
        </div>
        <div className="flex text-sm gap-1 items-center text-[#888888]">
          <Clock size={13} />
          {props.applied
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : "Posted "}{" "}
          {timeAgo(props.postTime)}
        </div>
      </div>

      <Divider size="xs" color="#4f4f4f" />
      {props.activeTab == "OFFERED" ? (
        <div>
          <div className="flex gap-2 mb-3">
            <Button variant="outline" radius="sm" color="#ffbd20" fullWidth>
              Accept
            </Button>
            <Button variant="light" radius="sm" color="#ffbd20" fullWidth>
              Decline
            </Button>
          </div>
          <Link to={`/job-details/${props.id}`}>
            <Button
              variant="outline"
              fullWidth={true}
              radius="sm"
              color="#ffbd20"
            >
              View Job
            </Button>
          </Link>
        </div>
      ) : props.activeTab == "INTERVIEWING" ? (
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#d1d1d1] text-sm ">
            <CalendarDays className=" text-[#ffbd20] w-5 h-5" /> Sun 25 August
            &bull;
            <span className="text-[#888888]">10:00 AM</span>
          </div>
          <Link to={`/job-details/${props.id}`}>
            <Button
              variant="outline"
              fullWidth={true}
              radius="sm"
              color="#ffbd20"
            >
              View Job
            </Button>
          </Link>
        </div>
      ) : (
        <Link to={`/job-details/${props.id}`}>
          <Button
            variant="outline"
            fullWidth={true}
            radius="sm"
            color="#ffbd20"
          >
            View Job
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Card;
