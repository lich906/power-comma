import {AnyAction} from "redux";

export const UNDO_COMMAND = 'UNDO';
export function undo(): AnyAction {
    return {
        type: UNDO_COMMAND
    }
}

export const REDO_COMMAND = 'REDO';
export function redo(): AnyAction {
    return {
        type: REDO_COMMAND
    }
}
