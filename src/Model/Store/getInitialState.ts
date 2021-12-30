import {Editor} from "../Types/Editor";
import {Presentation} from "../Types/Presentation";
import {Slide} from "../Types/Slide";
import {generate} from "../Utils/generate";

export function getInitialEditorState(): Editor {
    return {
        presentation: getInitialPresentationState(),
        selectedSlideIds: [],
        selectedElementIds: [],
        currentSlideId: null
    }
}

export function getInitialPresentationState(): Presentation {
    return {
        fileName: null,
        title: 'New Presentation',
        slides: [getInitialSlideState(1)],
        slidesQuantity: 1
    }
}

export function getInitialSlideState(order: number): Slide {
    return {
        id: generate(),
        order: order,
        title: 'New Slide',
        elements: [],
        background: {
            red: 255,
            green: 255,
            blue: 255,
            alpha: 0
        },
    }
}
