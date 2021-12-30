import {AnyAction, createStore} from "redux";
import {EditorReducers} from "./Reducers/EditorReducers";
import {App} from "../Types/App";
import {UNDO_COMMAND} from "./Actions/History/undo";
import {REDO_COMMAND} from "./Actions/History/redo";
import {UPDATE_HISTORY} from "./Actions/History/update";
import {RESET_HISTORY} from "./Actions/History/reset";

function enhance(reducer: Function) {
    const initialAppState: App = {
        past: [],
        present: reducer(undefined, {}),
        future: []
    }

    return function (state = initialAppState, action: AnyAction) {
        let {past, present, future } = state
        switch (action.type) {
            case UNDO_COMMAND:
                if (past) {
                    future = future.concat([present]);
                    present = past[past.length - 1];
                    past = past.filter((_, i) => i !== (past.length - 1));
                }
                return {
                    past: past,
                    future: future,
                    present: present
                };
            case REDO_COMMAND:
                if (future) {
                    past = past.concat([present]);
                    present = future[future.length - 1];
                    future = future.filter((_, i) => i !== (future.length - 1));
                }
                return {
                    past: past,
                    future: future,
                    present: present
                };
            case UPDATE_HISTORY:
                past = past.concat([present]);
                future = [];
                return {
                    past: past,
                    future: future,
                    present: present
                };
            case RESET_HISTORY:
                return {
                    past: [],
                    future: [],
                    present: present
                };
            default:
                return state;
        }
    }
}

const appReducers = enhance(EditorReducers);

export let appStore = createStore(appReducers);

export type AppState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch