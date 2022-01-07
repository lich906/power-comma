import {Presentation} from "../Model/Types/Presentation"
import {Slide} from "../Model/Types/Slide"

export function getSlideById(presentation: Presentation, slideId: string|null): Slide {
    return presentation.slides.filter(slide => slide.id === slideId)[0];
}