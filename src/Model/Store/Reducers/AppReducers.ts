import {Action, AnyAction} from "redux";
import {REDO_COMMAND} from "../Actions/History/redo";
import {UNDO_COMMAND} from "../Actions/History/undo";
import {getInitialAppState} from "../getInitialState";
import {App} from "../../Types/App";
import {EditorReducers} from "./EditorReducers";

export const history = (state: App = getInitialAppState(), action: Action): App|null => {
    let newState: App = state;
    switch (action.type) {
        case UNDO_COMMAND:
            if (state.past) {
                newState.data = state.past[state.past.length - 1];
                newState.past = state.past.splice(-1,1);
                newState.future = newState.future ? newState.future.concat([state.data]): [state.data];
            }
            return newState;
        case REDO_COMMAND:
            if (state.future) {
                newState.data = state.future[state.future.length - 1];
                newState.future = state.future.splice(-1,1);
                newState.past = newState.past ? newState.past.concat([state.data]): [state.data];
            }
            return newState;
        default:
            return null;
    }
}

export const appReducers = (state: App = getInitialAppState(), action: AnyAction) => {
    return {
        history: history(state, action),
        data: EditorReducers(state.data, action)
    }
}
