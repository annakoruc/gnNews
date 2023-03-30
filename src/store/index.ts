import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./countryNews/CountryNewsSlice";
import switchReducer from "./switch/SwitchSlice";
import modalReducer from "./modal/modalSlice";

const reducer = combineReducers({
  modal: modalReducer,
  switch: switchReducer,
  news: newsReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
