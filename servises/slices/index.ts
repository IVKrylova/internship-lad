import { combineReducers } from 'redux';

import { teamSlice } from "./team";

export const rootReducer = combineReducers({
  team: teamSlice.reducer,
});