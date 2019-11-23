import storageService from '../../../services/storage-service';
import {UPDATE_USER}from '../actions';
const USER='user';
export const updateUser = user => {
    storageService.saveToStorage(USER, user);
    return {
      type: UPDATE_USER,
      payload: user
    };
  };