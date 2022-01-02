import {Editor} from "../Types/Editor";
import {Presentation} from "../Types/Presentation";
import {Slide} from "../Types/Slide";
import {generate} from "../../Utils/generate";
import {INITIAL_PRESENTATION_TITLE, INITIAL_SLIDE_TITLE} from "../Constants";

export const getInitialSlideState = (): Slide => {
    return {
        id: generate(),
        title: INITIAL_SLIDE_TITLE,
        elements: [],
        background: {
            red: 255,
            green: 255,
            blue: 255,
            alpha: 0
        }
    }
}

export const initialPresentationState: Presentation = {
    fileName: null,
    title: INITIAL_PRESENTATION_TITLE,
    slides: [getInitialSlideState()]
}

export const initialEditorState: Editor = {
    presentation: initialPresentationState,
    selectedSlideIds: [initialPresentationState.slides[0].id],
    selectedElementIds: [],
    currentSlideId: initialPresentationState.slides[0].id
}
