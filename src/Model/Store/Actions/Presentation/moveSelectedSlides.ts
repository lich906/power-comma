import {AnyAction} from "redux";

export const MOVE_SELECTED_SLIDES_UP = 'MOVE_SELECTED_SLIDES_UP';
export function moveSelectedSlidesUp(slideIds: string[]): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_UP,
        slideIds: slideIds
    }
}

export const MOVE_SELECTED_SLIDES_DOWN = 'MOVE_SELECTED_SLIDES_DOWN';
export function moveSelectedSlidesDown(slideIds: string[]): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_DOWN,
        slideIds: slideIds
    }
}