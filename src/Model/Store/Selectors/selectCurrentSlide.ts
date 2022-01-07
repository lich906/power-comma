import {Slide} from "../../../Model/Types/Slide"
import {selectSlides} from "../../../Model/Store/Selectors/selectSlides";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";

export function selectCurrentSlide(): Slide|undefined {
    return selectSlides().find(slide => slide.id === selectCurrentSlideId());
}