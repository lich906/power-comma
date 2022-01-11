import {ElementAction} from "../ActionTypes";

export const SET_BORDER_WIDTH = 'setBorderWidth';
export function setBorderWidth(slideId: string, elementId: string, width: number): ElementAction {
    return {
        type: SET_BORDER_WIDTH,
        slideId: slideId,
        elementId: elementId,
        width: width
    }
}