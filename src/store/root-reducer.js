import { combineReducers } from "redux";

import { positionReducer } from "./positions/position-reducer";
import { filterReducer } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
    positions: positionReducer, //ключ positions передаём в position-selectors
    filters: filterReducer, //ключ filters передаём в filter-selectors
});