import {AnyAction} from "redux";

export const MOVE_SELECTED_SLIDES_UP = 'MOVE_SELECTED_SLIDES_UP';
export function moveSelectedSlidesUp(): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_UP
    }
}

export const MOVE_SELECTED_SLIDES_DOWN = 'MOVE_SELECTED_SLIDES_DOWN';
export function moveSelectedSlidesDown(): AnyAction {
    return {
        type: MOVE_SELECTED_SLIDES_DOWN
    }
}