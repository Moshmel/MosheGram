import storageService from "../../../services/storage-service";
import { SUCCESS_LOGIN, FAILD_LOGIN } from "../actions";

import userService from "../../../services/user-service";
const USER = "user";
//check if the user is connected else connect default user
export const checkIfLoggedOn = () => {
  return dispatch => {
    const userFromStorage = storageService.loadFromStorage(USER);
    if (userFromStorage)
      return dispatch({ type: SUCCESS_LOGIN, payload: userFromStorage });
    else {
      userService
        .login({ username: "default_user", password: "123456" })
        .then(res => dispatch({ type: SUCCESS_LOGIN, payload: res.data }))
        .catch(er=>dispatch({type:FAILD_LOGIN}))
    }

  };
};
