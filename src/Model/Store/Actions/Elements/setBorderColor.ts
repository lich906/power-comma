import {ElementAction} from "../ActionTypes";
import {Color} from "../../../Types/ExtraTypes";

export const SET_BORDER_COLOR = 'setBorderColor';
export function setBorderColor(slideId: string, elementId: string, color: Color): ElementAction {
    return {
        type: SET_BORDER_COLOR,
        slideId: slideId,
        elementId: elementId,
        color: color
    }
}