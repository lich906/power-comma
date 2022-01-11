import {AppState} from "../AppStore";
import {Presentation} from "../../Types/Presentation";

export function selectPresentation(state: AppState): Presentation {
    return state.present.presentation
}