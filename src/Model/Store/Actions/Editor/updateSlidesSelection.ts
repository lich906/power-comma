import {AnyAction} from "redux";

export const UPDATE_SLIDES_SELECTION = 'UPDATE_SLIDES_SELECTION';
export function updateSlidesSelection(slideIds: string[]): AnyAction {
    return {
        type: UPDATE_SLIDES_SELECTION,
        slideIds: slideIds
    }
}