import {AnyAction} from "redux";

export const DELETE_SLIDES = 'DELETE_SLIDES';
export function deleteSlides(ids: string[]): AnyAction {
    return {
        type: DELETE_SLIDES,
        ids: ids
    }
}