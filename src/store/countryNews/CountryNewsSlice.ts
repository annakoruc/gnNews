import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const fetchNews = fetch(
//   "https://newsapi.org/v2/top-headlines?country=pl&apiKey=a7d21bd4efd6414f8df5f5a452f99539"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

interface CountryNewsSlice {
  country: string;
  totalResults: number;
  articles: Array<{
    author: string;
    title: string;
    url: string;
    urlToImage?: File;
    publishedAt: Date;
  }>;
  loading: boolean;
  error: string;
}

const initialState: CountryNewsSlice = {
  country: "",
  totalResults: 0,
  articles: [],
  loading: false,
  error: "",
};

//get data from API
export const getDataFromApi = createAsyncThunk(
  "api/getNews",
  async (country: string, thunkAPI) => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((data) => {
        return data.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
    return res;
  }
);

const countriesNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataFromApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataFromApi.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload.articles;
    });
    builder.addCase(getDataFromApi.rejected, (state, action) => {
      console.log("rejected", action.error);
      state.loading = false;
    });
  },
});

// export const {} = countriesNewsSlice.actions;
export default countriesNewsSlice.reducer;
