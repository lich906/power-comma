import {AnyAction} from "redux";

export const UNDO_COMMAND = 'UNDO';
export function undo(): AnyAction {
    return {
        type: UNDO_COMMAND
    }
}

