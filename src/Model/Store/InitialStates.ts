import {Editor} from "../Types/Editor";
import {Presentation} from "../Types/Presentation";
import {Slide} from "../Types/Slide";
import {generate} from "../../Utils/generate";

export const getInitialSlideState = (): Slide => {
    return {
        id: generate(),
        title: 'New Slide',
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
    title: 'New Presentation',
    slides: [getInitialSlideState()]
}

export const initialEditorState: Editor = {
    presentation: initialPresentationState,
    selectedSlideIds: [],
    selectedElementIds: [],
    currentSlideId: null
}
