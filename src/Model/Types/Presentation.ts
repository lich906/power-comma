import {Slide} from "./Slide"

export type Presentation = {
    readonly fileName: string|null;
    readonly title: string;
    readonly slides: Slide[];
    readonly slidesQuantity: number;
}

export function getSlideById(presentation: Presentation, id: string): Slide {
    return presentation.slides.filter(slide => slide.id === id)[0];
}

export function addNewSlide(presentation: Presentation, newSlide: Slide): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.concat(newSlide)
    }
}