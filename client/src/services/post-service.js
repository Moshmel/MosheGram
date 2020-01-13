import Axios from "axios";
let axios = Axios.create({ withCredentials: true });
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "";
function addComment(data) {
  return axios.post(`${URL}/post/addcomment`, data);
}
function addPost(data) {
    return axios.post(`${URL}/post/addpost`, data);
  }

function getFeed(){
  return axios.get(`${URL}/postfeed`)
} 
function toggleLike(data) {
  return axios.post(`${URL}/post/updatelikes`,data);
}
export default {
  addComment,addPost,getFeed,toggleLike
};
