import {Slide} from "../../Types/Slide";
import {selectSlides} from "./selectSlides";
import {selectCurrentSlideId} from "./selectCurrentSlideId";
import {AppState} from "../AppStore";

export function selectCurrentSlide(state: AppState): Slide|undefined {
    return selectSlides(state).find(slide => slide.id === selectCurrentSlideId(state));
}