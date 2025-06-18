import axios from "axios";
const baseUrl = "http://localhost:8081";
const registerUser = (user: any) => {
  return axios
    .post(`${baseUrl}/users/register`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUser = (login: any) => {
  return axios
    .post(`${baseUrl}/users/login`, login)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export default { registerUser, loginUser };
