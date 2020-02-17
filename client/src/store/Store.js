import { createStore, applyMiddleware,compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";

export const store = configureStore({
    reducer: reducer
  })


