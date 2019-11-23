import postService from "../../../services/post-service";
import {FETCH_FEED_POSTS,ASYNC_ERROR}from '../actions';
export const fetchFeedPosts = () => {
    return dispatch => {
      postService.getFeed()
        .then(res => {
          return dispatch({ type: FETCH_FEED_POSTS, payload: res.data });
        })
        .catch(e => dispatch({ type: ASYNC_ERROR }));
    };
  };