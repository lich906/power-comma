import {AnyAction} from "redux";

export const CLOSE_PRESENTATION = 'CLOSE_PRESENTATION';
export function closePresentation(): AnyAction {
    return {
        type: CLOSE_PRESENTATION
    }
}