import MostRecent from "./MostRecent";

const Jobs = () => {
  return (
    <div className="flex justify-between p-3 mt-5 mb-5">
      <div>Recommended Jobs</div>
      <div>
        <MostRecent />
      </div>
    </div>
  );
};

export default Jobs;
