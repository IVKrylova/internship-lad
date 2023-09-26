import { combineReducers } from 'redux';

import { guidesSlice } from "./guides";

export const rootReducer = combineReducers({
  guides: guidesSlice.reducer,
});