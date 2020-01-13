import { ON_LIKE_PRESS } from "../actions";
import postService from "../../../services/post-service";
import userService from "../../../services/user-service";
export const onLikePress = data => {
  return dispatch => {
    const { postLikes, userLikes, postIdx, postId, userId } = data;
    Promise.all([
      postService.toggleLike({
        postId,
        postLikes
      }),
      userService.toggleLikeToPost({
        userId,
        userLikes
      })
    ])
      .then(res => {
        dispatch({
          type: ON_LIKE_PRESS,
          payload: { postLikes, userLikes, postIdx }
        });
      })
      .catch(e => console.log("like has failed ", e));
  };
};
