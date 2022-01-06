import {AnyAction} from "redux";

export const UPDATE_SLIDES_SELECTION = 'UPDATE_SLIDES_SELECTION';
export function updateSlidesSelection(ids: string[]): AnyAction {
    return {
        type: UPDATE_SLIDES_SELECTION,
        ids: ids
    }
}