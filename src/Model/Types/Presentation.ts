import {Slide} from "./Slide"

export type Presentation = {
    readonly title: string;
    readonly slides: Slide[];
}

export function getSlideById(presentation: Presentation, slideId: string|null): Slide {
    return presentation.slides.filter(slide => slide.id === slideId)[0];
}