import {ElementAction} from "../ActionTypes";

export const CHANGE_IMAGE_SOURCE = 'changeImageSource';
export function changeImageSource(slideId: string, elementId: string, src: string): ElementAction {
    return {
        type: CHANGE_IMAGE_SOURCE,
        slideId: slideId,
        elementId: elementId,
        src: src
    }
}