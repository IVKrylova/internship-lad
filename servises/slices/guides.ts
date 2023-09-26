import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { TGuides } from "@types";

interface guidesState {
  guides: TGuides;
}

const initialState: guidesState = {
  guides: [],
};

export const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    fetchGuides(state, action: PayloadAction<any>) {
      state.guides = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.guides,
      };
    });
  },
});

export const { fetchGuides } = guidesSlice.actions;
