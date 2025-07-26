import axios from "axios";
const baseUrl = "http://localhost:8081/users";
export const registerUser = async (user: any) => {
  try {
    return await axios.post(`${baseUrl}/register`, user);
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export const loginUser = async (login: any) => {
  try {
    console.log(login);
    return await axios.post(`${baseUrl}/login`, login);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export const sentOtp = async (email: any) => {
  try {
    return await axios.post(`${baseUrl}/sendOtp/${email}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyOtp = async (email: any, otp: any) => {
  try {
    return await axios.get(`${baseUrl}/verifyOtp/${email}/${otp}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const changePassword = async (email: string, password: string) => {
  try {
    return await axios.post(`${baseUrl}/changePassword`, { email, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
