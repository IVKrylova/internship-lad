import { combineReducers } from "redux";

import { guidesSlice } from "./guides";
import { mainGuidesListSlice } from "./mainGuidesList";

export const rootReducer = combineReducers({
  guides: guidesSlice.reducer,
  mainGuidesList: mainGuidesListSlice.reducer,
});
