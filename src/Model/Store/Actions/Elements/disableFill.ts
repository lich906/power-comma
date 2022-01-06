import {ElementAction} from "../ActionTypes";

export const DISABLE_FILL = 'disableFill';
export function disableFill(slideId: string, elementId: string): ElementAction {
    return {
        type: DISABLE_FILL,
        slideId: slideId,
        elementId: elementId
    }
}