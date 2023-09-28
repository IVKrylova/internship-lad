import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { TArticles } from "@types";

interface articlesState {
  articles: TArticles;
}

const initialState: articlesState = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    fetchArticles(state, action: PayloadAction<any>) {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.articles,
      };
    });
  },
});

export const { fetchArticles } = articlesSlice.actions;
