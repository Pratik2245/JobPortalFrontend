
import { Button, Divider, Text } from "@mantine/core";
import { Bookmark, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile, setProfile } from "../../Slices/ProfileSlice";
import { useEffect } from "react";
import { getUserData } from "../../Services/ProfileServices";

const JobCard = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);

  // Fetch profile if not already loaded
  useEffect(() => {
    if (!profile?.id && user?.id) {
      getUserData(user.id)
        .then((data: any) => {
          dispatch(setProfile(data));
        })
        .catch((err) => console.error(err));
    }
  }, [profile?.id, user?.id, dispatch]);

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
    <div className="flex flex-col gap-2 rounded-2xl bg-[#3d3d3d] p-4 w-74 hover:shadow-[0_0_5px_1px_yellow] !shadow-[#ffd149">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center ">
          <div className="bg-[#454545]">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div className="">
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-[#b0b0b0]">
              <Link to="/company">{props.company}</Link>
              &#x2022;
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
        <div className="text-[#d1d1d1] font-semibold">
          &#8377;{props.packageOffered} LPA
        </div>
        <div className="flex text-sm gap-1 items-center text-[#888888]">
          <Clock size={15} /> Posted {timeAgo(props.postTime)}
        </div>
      </div>
      <Link to={`/job-details/${props.id}`}>
        <Button variant="light" fullWidth={true} radius="sm" color="#ffbd20">
          View Job
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
