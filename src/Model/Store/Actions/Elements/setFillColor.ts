import {ElementAction} from "../ActionTypes";
import {Color} from "../../../Types/ExtraTypes";

export const SET_FILL_COLOR = 'setFillColor';
export function setFillColor(slideId: string, elementId: string, color: Color): ElementAction {
    return {
        type: SET_FILL_COLOR,
        slideId: slideId,
        elementId: elementId,
        color: color
    }
}