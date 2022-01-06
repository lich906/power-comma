import {ElementAction} from "../ActionTypes";

export const DISABLE_BORDER = 'disableBorder';
export function disableBorder(slideId: string, elementId: string): ElementAction {
    return {
        type: DISABLE_BORDER,
        slideId: slideId,
        elementId: elementId
    }
}