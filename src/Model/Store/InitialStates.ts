import {Editor} from "../Types/Editor";
import {Presentation} from "../Types/Presentation";
import {Slide} from "../Types/Slide";
import {generate} from "../../Utils/generate";
import {DEFAULT_PRESENTATION_TITLE, DEFAULT_SLIDE_BACKGROUND_COLOR, DEFAULT_SLIDE_TITLE} from "../Constants";

export const getInitialSlideState = (): Slide => {
    return {
        id: generate(),
        title: DEFAULT_SLIDE_TITLE,
        elements: [],
        background: DEFAULT_SLIDE_BACKGROUND_COLOR
    }
}

export const initialPresentationState: Presentation = {
    title: DEFAULT_PRESENTATION_TITLE,
    slides: [getInitialSlideState()]
}

export const initialEditorState: Editor = {
    presentation: initialPresentationState,
    selectedSlideIds: [initialPresentationState.slides[0].id],
    selectedElementIds: [],
    currentSlideId: initialPresentationState.slides[0].id
}
