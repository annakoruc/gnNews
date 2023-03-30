import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isList: true,
};

const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    changeSwitch: (state) => {
      state.isList = !state.isList;
    },
  },
});

export const { changeSwitch } = switchSlice.actions;

export default switchSlice.reducer;
