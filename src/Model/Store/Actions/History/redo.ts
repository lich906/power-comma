import {AnyAction} from "redux";

export const REDO_COMMAND = 'REDO';
export function redo(): AnyAction {
    return {
        type: REDO_COMMAND
    }
}
