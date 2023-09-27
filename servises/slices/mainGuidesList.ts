import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { TGuides } from "@types";

interface mainGuidesListState {
  mainGuidesList: TGuides;
}

const initialState: mainGuidesListState = {
  mainGuidesList: [],
};

export const mainGuidesListSlice = createSlice({
  name: "mainGuidesList",
  initialState,
  reducers: {
    fetchMainGuidesList(state, action: PayloadAction<any>) {
      state.mainGuidesList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.mainGuidesList,
      };
    });
  },
});

export const { fetchMainGuidesList } = mainGuidesListSlice.actions;
