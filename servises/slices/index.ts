import { combineReducers } from "redux";

import { guidesSlice } from "./guides";
import { mainGuidesListSlice } from "./mainGuidesList";
import { articlesSlice } from "./articles";

export const rootReducer = combineReducers({
  guides: guidesSlice.reducer,
  mainGuidesList: mainGuidesListSlice.reducer,
  articles: articlesSlice.reducer,
});
