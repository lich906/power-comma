import {ElementAction} from "../ActionTypes";

export const SET_FONT_FAMILY = 'setFontFamily';
export function setFontFamily(slideId: string, elementId: string, fontFamily: string): ElementAction {
    return {
        type: SET_FONT_FAMILY,
        slideId: slideId,
        elementId: elementId,
        fontFamily: fontFamily
    }
}