import {Slide} from "../../Types/Slide";
import {selectSlides} from "./selectSlides";
import {selectCurrentSlideId} from "./selectCurrentSlideId";

export function selectCurrentSlide(): Slide|undefined {
    return selectSlides().find(slide => slide.id === selectCurrentSlideId());
}