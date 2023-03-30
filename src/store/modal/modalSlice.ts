import { createSlice } from "@reduxjs/toolkit";

interface ModalSliceTypes {
  isOpenNews?: boolean;
  isOpenContent?: boolean;
  article?: {
    title: string;
    author: string;
    url: string;
    content: string;
    img: string;
  };
  content?: string | JSX.Element | JSX.Element[];
}

const initialState: ModalSliceTypes = {
  isOpenNews: false,
  isOpenContent: false,
  article: { title: "", author: "", url: "", content: "", img: "" },
  content: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    CHANGE_IS_OPEN_NEWS: (state) => {
      state.isOpenNews = !state.isOpenNews;
    },
    ADD_ARTICLE: (state, action) => {
      state.article = action.payload;
    },
    CHANGE_IS_OPEN_CONTENT: (state) => {
      state.isOpenContent = !state.isOpenContent;
    },
    ADD_CONTENT: (state, action) => {
      state.content = action.payload;
    },
    CLOSE_MODAL: (state) => {
      if (state.isOpenContent) {
        state.isOpenContent = !state.isOpenContent;
      }
      if (state.isOpenNews) {
        state.isOpenNews = !state.isOpenNews;
      }
    },
  },
});

export const {
  CHANGE_IS_OPEN_NEWS,
  ADD_ARTICLE,
  CHANGE_IS_OPEN_CONTENT,
  ADD_CONTENT,
  CLOSE_MODAL,
} = modalSlice.actions;

export default modalSlice.reducer;
