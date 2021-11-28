import {AnyAction} from "redux";

export const SAVE_PRESENTATION = 'SAVE_PRESENTATION';
export function savePresentation(fileName: string): AnyAction {
    return {
        type: SAVE_PRESENTATION,
        fileName: fileName
    }
}