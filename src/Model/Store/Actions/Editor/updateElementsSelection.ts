import {AnyAction} from "redux";

export const UPDATE_ELEMENTS_SELECTION = 'UPDATE_ELEMENTS_SELECTION';
export function updateSlidesSelection(ids: number[]): AnyAction {
    return {
        type: UPDATE_ELEMENTS_SELECTION,
        elementIds: ids
    }
}