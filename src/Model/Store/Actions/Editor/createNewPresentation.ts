import {AnyAction} from "redux";

export const CREATE_NEW_PRESENTATION = 'CREATE_NEW_PRESENTATION'
export function createNewPresentation(title: string): AnyAction {
    return {
        type: CREATE_NEW_PRESENTATION,
        title: title
    }
}