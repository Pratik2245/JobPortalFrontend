import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:8081/job";
const postJob = async (userData: any) => {
  console.log(userData);
  try {
    return await axios.post(`${baseUrl}/post`, userData);
  } catch (error: any) {
    console.log(error);
    toast.error(
      <div>
        <div className="font-semibold text-black text-base">
          Job Posting Failed
        </div>
        <div className="text-sm text-white">
          {error.response.data.errorMessage}
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      }
    );
    throw error;
  }
};
const getAllJobs = async () => {
  try {
    const res = await axios.get(`${baseUrl}/getAllJobs`);
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getJobById = async (id: any) => {
  try {
    const res = await axios.get(`${baseUrl}/getAllJobs/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const applyJob = async (application: any, id: any) => {
  try {
    const res = await axios.post(`${baseUrl}/apply/${id}`, application);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export { postJob, getAllJobs, getJobById, applyJob };
