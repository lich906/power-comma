import {AnyAction} from "redux";

export const UPDATE_HISTORY = 'UPDATE_HISTORY';
export function update(): AnyAction {
    return {
        type: UPDATE_HISTORY
    }
}