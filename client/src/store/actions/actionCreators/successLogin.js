import storageService from '../../../services/storage-service';
import {SUCCESS_LOGIN}from '../actions';
const USER = "user";
export const successLogin = user => {
    storageService.saveToStorage(USER, user);
    return {
      type: SUCCESS_LOGIN,
      payload: user
    };
  };