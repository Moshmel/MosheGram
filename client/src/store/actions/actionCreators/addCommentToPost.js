
import {ADD_COMMENT}from '../actions';
import postService from '../../../services/post-service'

export const addCommentToPost = data => {
    return dispatch => {
      postService.addComment( { ...data })
        .then(res => {
          //update localy the comment
          dispatch({ type: ADD_COMMENT, payload: data });
        });
    };
  };