import { updateUserImg } from "./actionCreators/updateUserImg";
import { logout } from "./actionCreators/logout";
import { onLikePress } from "./actionCreators/onLikePress";
import { addPost } from "./actionCreators/addPost";
import { updateUser } from "./actionCreators/updateUser";
import { checkIfLoggedOn } from "./actionCreators/checkIfLoggedOn";
import { fetchFeedPosts } from "./actionCreators/fetchFeedPosts";
import { addCommentToPost } from "./actionCreators/addCommentToPost";
import { handleLogin } from "./actionCreators/handleLogin";
import { changePostFilter } from "./actionCreators/changePostFilter";
import { successLogin } from "./actionCreators/successLogin";
const USER = "user";

export {
  updateUserImg,
  logout,
  onLikePress,
  updateUser,
  addPost,
  checkIfLoggedOn,
  fetchFeedPosts,
  addCommentToPost,
  handleLogin,
  changePostFilter,
  successLogin
};
