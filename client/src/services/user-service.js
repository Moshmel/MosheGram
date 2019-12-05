import Axios from "axios";
import storageService from "./storage-service";
let axios = Axios.create({ withCredentials: true });
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/user"
    : "/user";

function updateImg(data) {
  return axios.post(`${URL}/updateuserimg`, data);
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

function shouldWelcomeModalOpen() {
  const welcomeTimestamp = storageService.loadFromStorage("welcomeTimestamp");
  if (!welcomeTimestamp) {
    storageService.saveToStorage("welcomeTimestamp", Date.now());
    return true;
  } else {
    const timeGap = Date.now() - welcomeTimestamp;
    const user = storageService.loadFromStorage("user");
    if (user)
    {

      if (timeGap > 15 * 60 * 1000 && user._id == "5de3ef4d38e83643e48eaabd") {
        storageService.saveToStorage("welcomeTimestamp", Date.now());
        return true;
      }
    }
    else return false;
  }
}
export default {
  login,
  register,
  fetchUserData,
  addPost,
  updateImg,
  shouldWelcomeModalOpen
};
