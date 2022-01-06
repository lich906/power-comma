import {SlideAction} from "../ActionTypes";
import {elementType} from "../../../Types/Element";

export const ADD_NEW_ELEMENT = 'addNewElement';
export function addNewElement(slideId: string, type: elementType): SlideAction {
    return {
        type: ADD_NEW_ELEMENT,
        slideId: slideId,
        elementType: type
    }
}