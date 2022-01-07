import {SlideAction} from "../ActionTypes";
import {AnchorType} from "../../../Types/ExtraTypes";

export const DRAG_ELEMENTS = 'dragElements';
export function dragElements(slideId: string, ids: string[], delta: AnchorType): SlideAction {
    return {
        type: DRAG_ELEMENTS,
        slideId: slideId,
        ids: ids,
        delta: delta
    }
}