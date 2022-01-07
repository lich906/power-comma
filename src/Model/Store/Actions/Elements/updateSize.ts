import {AnchorType} from "../../../Types/ExtraTypes";
import {ElementAction} from "../ActionTypes";

export const UPDATE_SIZE = 'updateSize';
export function updateSize(slideId: string, elementId: string, delta: AnchorType): ElementAction {
    return {
        type: UPDATE_SIZE,
        slideId: slideId,
        elementId: elementId,
        delta: delta
    }
}