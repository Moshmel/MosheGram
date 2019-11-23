import axios from 'axios';
import {ON_LIKE_PRESS}from '../actions';
export const onLikePress = data => {
    return dispatch => {
      const { postLikes, userLikes, postIdx, postId, userId } = data;
      Promise.all([
        axios.post("http://localhost:3001/post/updatelikes", {
          postId,
          postLikes
        }),
        axios.post("http://localhost:3001/user/toggleliketopost", {
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