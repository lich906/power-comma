import {AnyAction} from "redux";

export const CHANGE_PRESENTATION_TITLE = 'changePresentationTitle';
export function changePresentationTitle(title: string): AnyAction {
    return {
        type: CHANGE_PRESENTATION_TITLE,
        title: title
    }
}