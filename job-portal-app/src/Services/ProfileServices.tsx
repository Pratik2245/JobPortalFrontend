import axios from "axios";
const baseUrl = "http://localhost:8081/profile/";
const getUserData = async (id: number) => {
  try {
    const res = await axios.get(`${baseUrl}get/${id}`);
    console.log("Fetched user data:", res.data);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch user data:", err);
    return null;
  }
};

const updateProfile = async (profile: any) => {
  return await axios
    .post(`${baseUrl}update`, profile)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
export { getUserData, updateProfile };
