import {AnyAction} from "redux";

export const UPDATE_ELEMENTS_SELECTION = 'UPDATE_ELEMENTS_SELECTION';
export function updateSlidesSelection(elementIds: number[]): AnyAction {
    return {
        type: UPDATE_ELEMENTS_SELECTION,
        elementIds: elementIds
    }
}