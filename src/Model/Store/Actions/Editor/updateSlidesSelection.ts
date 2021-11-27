import {AnyAction} from "redux";

export const UPDATE_SLIDES_SELECTION = 'UPDATE_SLIDES_SELECTION';
export function updateSlidesSelection(slideIds: number[]): AnyAction {
    return {
        type: UPDATE_SLIDES_SELECTION,
        slideIds: slideIds
    }
}