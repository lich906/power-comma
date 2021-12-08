import {AnyAction} from "redux";

export const RESET_HISTORY = 'RESET_HISTORY';
export function reset(): AnyAction {
    return {
        type: RESET_HISTORY
    }
}