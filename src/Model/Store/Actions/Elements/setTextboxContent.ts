import {ElementAction} from "../ActionTypes";

export const SET_TEXTBOX_CONTENT = 'setTextBoxContent';
export function setTextBoxContent(slideId: string, elementId: string, content: string): ElementAction {
    return {
        type: SET_TEXTBOX_CONTENT,
        slideId: slideId,
        elementId: elementId,
        content: content
    }
}