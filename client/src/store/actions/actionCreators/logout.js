import {LOGOUT} from '../actions';
import storageService from '../../../services/storage-service';
const USER = "user";
export const logout = () => {
    storageService.saveToStorage(USER, "");
    return {
      type: LOGOUT
    };
  };