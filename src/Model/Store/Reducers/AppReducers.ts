import {Action, AnyAction} from "redux";
import {REDO_COMMAND} from "../Actions/History/redo";
import {UNDO_COMMAND} from "../Actions/History/undo";
import {getInitialAppState} from "../getInitialState";
import {App} from "../../Types/App";

export const history = (state: Object = {}, action: Action) => {
    switch (action.type) {
        case UNDO_COMMAND:
            return;
        case REDO_COMMAND:
            return;
        default:
            return;
    }
}

export const appReducers = (state: App = getInitialAppState(), action: AnyAction) => {
    return {}
}
