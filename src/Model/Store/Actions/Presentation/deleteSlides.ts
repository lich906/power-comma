import {AnyAction} from "redux";

export const DELETE_SLIDES = 'DELETE_SLIDES';
export function deleteSlides(slideIds: string[]): AnyAction {
    return {
        type: DELETE_SLIDES,
        slideIds: slideIds
    }
}