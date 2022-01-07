import {AnyAction} from "redux";

export const UPDATE_ELEMENTS_SELECTION = 'UPDATE_ELEMENTS_SELECTION';
export function updateElementsSelection(ids: string[]): AnyAction {
    return {
        type: UPDATE_ELEMENTS_SELECTION,
        ids: ids
    }
}