import {AnchorType} from "../../../Types/ExtraTypes";
import {ElementAction} from "../ActionTypes";


export const UPDATE_POSITION = 'updatePosition';
export function updatePosition(slideId: string, elementId: string, delta: AnchorType): ElementAction {
    return {
        type: UPDATE_POSITION,
        slideId: slideId,
        elementId: elementId,
        delta: delta
    }
}