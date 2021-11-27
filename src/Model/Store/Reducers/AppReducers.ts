import {Action} from "redux";
import {REDO_COMMAND, UNDO_COMMAND} from "../Actions/History/History";

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

const appReducers = (state: Object = {}, action: Object) => {
    return {}
}

export {
    appReducers,
}