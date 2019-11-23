import postService from "../../../services/post-service";
import userService from "../../../services/user-service";
import { fetchFeedPosts } from "./fetchFeedPosts";
import { ADD_POST } from "../actions";
export const addPost = data => async dispatch => {
  const { postText, currFilter, fileUrl, userId, userImg, username } = data;
  const post = { postText, currFilter, fileUrl, userId, userImg, username };
  //send post data to backend and update user
  try {
    const postRes = await postService.addPost(post);
    const postId=postRes.data._id;
    userService.addPost({ userId, postId});
    dispatch({
      type: ADD_POST,
      payload: { postId}
    });
    dispatch(fetchFeedPosts());
  } catch (e) {
    console.log("something went wrong, adding post faild...", e);
  }
};
