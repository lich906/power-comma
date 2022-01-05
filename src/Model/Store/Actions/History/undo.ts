import {AnyAction} from "redux";

export const UNDO = 'UNDO';
export function undo(): AnyAction {
    return {
        type: UNDO
    }
}

