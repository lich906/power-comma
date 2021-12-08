import {combineReducers} from "redux";
import {EditorReducers} from "./EditorReducers";
import {HistoryReducers} from "./HistoryReducers";

export const appReducers = combineReducers({
    history: HistoryReducers,
    data: EditorReducers,
});
