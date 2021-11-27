import {AnyAction} from "redux";

export const OPEN_PRESENTATION = 'OPEN_PRESENTATION';
export function openPresentation(fileName: string): AnyAction {
    return {
        type: OPEN_PRESENTATION,
        fileName: fileName
    }
}
