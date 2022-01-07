import {ElementAction} from "../ActionTypes";

export const SET_FONT_SIZE = 'setFontSize';
export function setFontSize(slideId: string, elementId: string, fontSize: number): ElementAction {
    return {
        type: SET_FONT_SIZE,
        slideId: slideId,
        elementId: elementId,
        fontSize: fontSize
    }
}