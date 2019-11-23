import {UPDATE_USER_IMG}from '../actions';
import userService from '../../../services/user-service'
export  const updateUserImg = data => {
    return dispatch => {
      const { userImg, userId } = data;
        userService.updateImg({userImg,userId})
        .then(res => dispatch({ type: UPDATE_USER_IMG, payload: {userImg} }))
        .catch(err=>{console.log('error in update user img')})
    };
  };