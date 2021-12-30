import {App} from "../../Types/App";
import {getInitialAppState} from "../getInitialState";
import {AnyAction} from "redux";
import {UNDO_COMMAND} from "../Actions/History/undo";
import {REDO_COMMAND} from "../Actions/History/redo";
import {UPDATE_HISTORY} from "../Actions/History/update";
import {RESET_HISTORY} from "../Actions/History/reset";

export const HistoryReducers = (state: App = getInitialAppState(), action: AnyAction): App => {
    let {history, data} = state;
    let {past, future} = history;
    switch (action.type) {
        case UNDO_COMMAND:
            if (past) {
                future = future.concat([data]);
                data = past[past.length - 1];
                past = past.filter((_, i) => i !== (past.length - 1));
            }
            return {
                history: {
                    past: past,
                    future: future
                },
                data: data
            };
        case REDO_COMMAND:
            if (future) {
                past = past.concat([data]);
                data = future[future.length - 1];
                future = future.filter((_, i) => i !== (future.length - 1));
            }
            return {
                history: {
                    past: past,
                    future: future
                },
                data: data
            };
        case UPDATE_HISTORY:
            past = past.concat([data]);
            future = [];
            return {
                history: {
                    past: past,
                    future: future
                },
                data: data
            };
        case RESET_HISTORY:
            past = [];
            future = [];
            return {
                history: {
                    past: past,
                    future: future
                },
                data: data
            };
        default:
            return state;
    }
}
