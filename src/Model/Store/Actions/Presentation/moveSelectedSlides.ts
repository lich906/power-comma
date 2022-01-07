import {AnyAction} from "redux";

export const MOVE_SELECTED_SLIDES_UP = 'MOVE_SELECTED_SLIDES_UP';
export function moveSelectedSlidesUp(ids: string[]): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_UP,
        ids: ids
    }
}

export const MOVE_SELECTED_SLIDES_DOWN = 'MOVE_SELECTED_SLIDES_DOWN';
export function moveSelectedSlidesDown(ids: string[]): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_DOWN,
        ids: ids
    }
}