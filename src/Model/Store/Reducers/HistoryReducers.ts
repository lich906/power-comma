import {App} from "../../Types/App";
import {getInitialAppState} from "../getInitialState";
import {AnyAction} from "redux";
import {UNDO_COMMAND} from "../Actions/History/undo";
import {REDO_COMMAND} from "../Actions/History/redo";
import {UPDATE_HISTORY} from "../Actions/History/update";
import {RESET_HISTORY} from "../Actions/History/reset";

export const HistoryReducers = (state: App = getInitialAppState(), action: AnyAction): App|null => {
    let newState: App = state;
    switch (action.type) {
        case UNDO_COMMAND:
            if (state.history.past) {
                newState.data = state.history.past[state.history.past.length - 1];
                newState.history.past = state.history.past.splice(-1,1);
                newState.history.future = newState.history.future ? newState.history.future.concat([state.data]) : [state.data];
            }
            return newState;
        case REDO_COMMAND:
            if (state.history.future) {
                newState.data = state.history.future[state.history.future.length - 1];
                newState.history.future = state.history.future.splice(-1,1);
                newState.history.past = newState.history.past ? newState.history.past.concat([state.data]) : [state.data];
            }
            return newState;
        case UPDATE_HISTORY:
            newState.history.past = newState.history.past ? newState.history.past.concat([state.data]) : [state.data];
            newState.history.future = null;
            return newState;
        case RESET_HISTORY:
            newState.history.past = null;
            newState.history.future = null;
            return newState;
        default:
            return null;
    }
}
