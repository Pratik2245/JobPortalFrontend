import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import MostRecent from "./MostRecent";
import { getAllJobs } from "../../Services/PostJobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Jobs = () => {
  const dispatch=useDispatch();
  const sort=useSelector((state:any)=>state.sort)
  const filter=useSelector((state:any)=>state.filter);
  const[filteredJobs,setFilteredJobs]=useState<any>([]);
  // now we are creating the job list manually
  const [jobList, setJobList] = useState([{}]);

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort())
    getAllJobs()
      .then((res) =>setJobList(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
     let filtered=jobList;
     console.log(filter);
     
     if(filter.name){
        filtered = filtered.filter((job: any) =>
        (job?.name ?? "").toLowerCase().includes((filter.name ?? "").toLowerCase()));
      }
     if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filtered = filtered.filter((job: any) =>
      filter["Job Title"].some((title: any) =>
      (job?.jobTitle ?? "").toLowerCase().includes(title.toLowerCase())));
     }
     if(filter.Location && filter.Location.length>0){
      filtered = filtered.filter((job: any) =>
      filter.Location.some((location: any) =>
      (job?.location ?? "").toLowerCase().includes(location.toLowerCase())));
     }
    if (filter.Experience && filter.Experience.length > 0) {
        filtered = filtered.filter((job: any) =>
        filter.Experience.some((exp: any) =>
        (job?.experience ?? "").toLowerCase().includes(exp.toLowerCase())));
    }

     if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filtered = filtered.filter((job: any) =>
      filter["Job Type"].some((title: any) =>
      (job?.jobType ?? "").toLowerCase().includes(title.toLowerCase())));
     }
    if(filter.salary && filter.salary.length>0){
      filtered = filtered.filter((job: any)=>filter.salary[0]<=job.packageOffered && job.packageOffered<=filter.salary[1])
    }

      if (sort) {
      switch (sort) {
        case "Most Recent":
          filtered = [...filtered].sort(
            (a: any, b: any) =>
              new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
          );
          break;
        case "Salary (Low to High)":
          filtered = [...filtered].sort(
            (a: any, b: any) => a.packageOffered - b.packageOffered
          );
          break;
        case "Salary (High to Low)":
          filtered = [...filtered].sort(
            (a: any, b: any) => b.packageOffered - a.packageOffered
          );
          break;
        case "Relevance": // optional if you want to sort differently
        default:
          break;
      }
    }
      setFilteredJobs(filtered);
     
    }, [filter,jobList,sort])
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between p-3 mt-5">
          <div className="text-2xl font-semibold">Recommended Jobs</div>
          <div>
            <MostRecent  sortType="job"/>
          </div>
        </div>
        <div className=" mt-10 flex flex-wrap gap-5 justify-around">
          {filteredJobs.map((job:any, key:any) => (
            <JobCard key={key} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
