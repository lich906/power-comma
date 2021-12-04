import {AnyAction} from "redux";

export const CREATE_NEW_SLIDE = 'CREATE_NEW_SLIDE';
export function createNewSlide(): AnyAction {
    return {
        type: CREATE_NEW_SLIDE
    }
}