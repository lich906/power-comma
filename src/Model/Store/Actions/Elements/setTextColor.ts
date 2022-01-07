import {Color} from "../../../Types/ExtraTypes";
import {ElementAction} from "../ActionTypes";

export const SET_TEXT_COLOR = 'setTextColor';
export function setTextColor(slideId: string, elementId: string, color: Color): ElementAction {
    return {
        type: SET_TEXT_COLOR,
        slideId: slideId,
        elementId: elementId,
        color: color
    }
}