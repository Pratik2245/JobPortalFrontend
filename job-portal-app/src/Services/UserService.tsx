import axios from "axios";
const baseUrl = "http://localhost:8081/";
export const registerUser = async (user: any) => {
  try {
    return await axios.post(`${baseUrl}users/register`, user);
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export const loginUser = async (login: any) => {
  try {
    console.log(login);
    return await axios.post(`${baseUrl}users/login`, login);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
