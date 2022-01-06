import {SlideAction} from "../ActionTypes";

export const DRAG_ELEMENTS = 'dragElements';
export function dragElements(slideId: string, ids: string[], dx: number, dy: number): SlideAction {
    return {
        type: DRAG_ELEMENTS,
        slideId: slideId,
        ids: ids,
        dx: dx,
        dy: dy
    }
}