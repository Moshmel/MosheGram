import {
  LOGIN,
  LOGOUT,
  SIGN_UP,
  SUCCESS_LOGIN,
  CHANGE_POST_FILTER,
  UPDATE_USER,
  FETCH_FEED_POSTS,
  ADD_COMMENT,
  ON_LIKE_PRESS,
  UPDATE_USER_IMG,
  ADD_POST
} from "../actions/actions";
import storageService from "../../services/storage-service";
const USER = "user";
const initialState = {
  user: "",
  currFilter: {},
  isConnected: false,
  feedPosts: [],
  isFetching: false,
};

function userReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_USER_IMG: {
      let tempUser = JSON.parse(JSON.stringify(state.user));
      tempUser.userImg = payload.userImg;
      storageService.saveToStorage(USER, tempUser);
      return {
        ...state,
        user: tempUser
      };
    }

    case ON_LIKE_PRESS: {
      const { postIdx, postLikes, userLikes } = payload;
      let tempUser = JSON.parse(JSON.stringify(state.user));
      tempUser.likes = userLikes;
      let tempFeedPosts = JSON.parse(JSON.stringify(state.feedPosts));
      tempFeedPosts[postIdx].likes = postLikes;
      storageService.saveToStorage(USER, tempUser);
      return {
        ...state,
        user: tempUser,
        feedPosts: tempFeedPosts
      };
    }
    case ADD_COMMENT: {
      return {
        ...state
      };
    }
    case FETCH_FEED_POSTS:
      return {
        ...state,
        feedPosts: payload
      };
    case ADD_POST: {
      const { postId} = payload;
      let tempUser=JSON.parse(JSON.stringify(state.user));
      tempUser.posts.unshift({type:'post',postId});
      return {
        ...state,
        user: tempUser,
      };
    }

    case UPDATE_USER:
      return {
        ...state,
        user: payload
      };

    case LOGIN:
      return {
        ...state,
        user: { username: payload.username },
        isConnected: true
      };
    case LOGOUT:
      return {
        ...state,
        user: "",
        isConnected: false
      };
    case SIGN_UP:
      return {
        ...state,
        user: { username: "newuser" },
        isConnected: true
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        user: payload,
        isConnected: true
      };
    case CHANGE_POST_FILTER:
      return {
        ...state,
        currFilter: payload
      };
    default:
      return state;
  }
}

export default userReducer;
