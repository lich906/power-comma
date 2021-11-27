import {Action} from "redux";
import {UNDO_COMMAND} from "../Actions/History/History";

export const history = (state: Object = {}, action: Action) => {
    if (action.type === UNDO_COMMAND) {

    }
}

const appReducers = (state: Object = {}, action: Object) => {
    return {}
}

export {
    appReducers,
}