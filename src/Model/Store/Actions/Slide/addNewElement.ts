import {SlideAction} from "../ActionTypes";

export const ADD_NEW_ELEMENT = 'addNewElement';
export function addNewElement(slideId: string, type: string): SlideAction {
    return {
        type: ADD_NEW_ELEMENT,
        slideId: slideId
    }
}