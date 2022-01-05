import {AnyAction} from "redux";

export const REDO = 'REDO';
export function redo(): AnyAction {
    return {
        type: REDO
    }
}
