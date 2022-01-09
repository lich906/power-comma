import {AppState} from "../AppStore";
import {Slide} from "../../Types/Slide";

export function selectSlides(state: AppState): Slide[] {
    return state.present.presentation.slides;
}