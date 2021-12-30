import {AnyAction} from "redux";

export const DELETE_ALL_SLIDES = 'DELETE_ALL_SLIDES';
export function deleteAllSlides(): AnyAction {
    return {
        type: DELETE_ALL_SLIDES
    }
}