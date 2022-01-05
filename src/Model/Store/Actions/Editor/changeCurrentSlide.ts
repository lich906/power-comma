import {AnyAction} from "redux";

export const CHANGE_CURRENT_SLIDE = 'CHANGE_CURRENT_SLIDE';
export function changeCurrentSlide(id: string|null): AnyAction {
    return {
        type: CHANGE_CURRENT_SLIDE,
        slideId: id
    }
}