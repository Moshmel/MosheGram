import {CHANGE_POST_FILTER}from '../actions';
export const changePostFilter = filter => {
    return {
      type: CHANGE_POST_FILTER,
      payload: filter
    };
  };