import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { TGuides } from "@types";
import { toggleLikeGuide } from "@utils";

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
    likeGuide(state, action: PayloadAction<any>) {
      state.guides = toggleLikeGuide(state.guides, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload.guides,
      };

      if (state.guides) nextState.guides = state.guides;

      return nextState;
    });
  },
});

export const { fetchGuides, likeGuide } = guidesSlice.actions;
