import storageService from '../../../services/storage-service';
import {SUCCESS_LOGIN,FAILD_LOGIN}from '../actions';

const USER='user';

export const checkIfLoggedOn = () => {
    const userFromStorage = storageService.loadFromStorage(USER);
    const res = userFromStorage
      ? { type: SUCCESS_LOGIN, payload: userFromStorage }
      : { type: FAILD_LOGIN };
    return res;
  };