import {Slide} from "../../../Model/Types/Slide"
import {selectSlides} from "../../../Model/Store/Selectors/selectSlides";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";

export function selectCurrentSlide(): Slide {
    return selectSlides().filter(slide => slide.id === selectCurrentSlideId())[0];
}