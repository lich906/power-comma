import {combineReducers} from "redux";
import {EditorReducers} from "./EditorReducers";
import {historyReducers} from "./HistoryReducers";

export const appReducers = combineReducers({
    history: historyReducers,
    data: EditorReducers
});
