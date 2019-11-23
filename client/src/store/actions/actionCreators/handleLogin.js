
import {SUCCESS_LOGIN}from '../actions';

export const handleLogin = data => {
    return {
      type: SUCCESS_LOGIN,
      payload: data
    };
  };
  