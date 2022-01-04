import {AnyAction} from "redux";
import {Presentation} from "../../../Types/Presentation";

export const OPEN_PRESENTATION = 'OPEN_PRESENTATION';
export function openPresentation(presentation: Presentation): AnyAction {
    return {
        type: OPEN_PRESENTATION,
        presentation: presentation
    }
}
