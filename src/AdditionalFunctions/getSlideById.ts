import {Slide} from "../Model/Types/Slide"
import {selectSlides} from "../Model/Store/Selectors/selectSlides";

export function getSlideById(slideId: string|null): Slide {
    const slides = selectSlides();
    return slides.filter(slide => slide.id === slideId)[0];
}