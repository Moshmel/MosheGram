import Axios from "axios";
let axios = Axios.create({ withCredentials: true });
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/user"
    : "/user";

function updateImg(data){
  return  axios
  .post(`${URL}/updateuserimg`, data);
}
function login(data) {
  return axios.post(`${URL}/login`, data);
}

function register(data) {
  return axios.post(`${URL}/register`, data);
}
function fetchUserData(data) {
  return axios.post(`${URL}/userpagedata`, data);
}
function addPost(data) {
  return axios.post(`${URL}/addpost`, data);
}
export default {
  login,
  register,
  fetchUserData,
 addPost,updateImg
};
