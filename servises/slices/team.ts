import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { TTeam } from "@types";

interface teamState {
  team: TTeam;
}

const initialState: teamState = {
  team: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    fetchTeam(state, action: PayloadAction<any>) {
      state.team[`${action.payload[0].category}`] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.team,
      };
    });
  },
});

export const { fetchTeam } = teamSlice.actions;
