import {Editor} from "../Types/Editor";
import {Presentation} from "../Types/Presentation";
import {Slide} from "../Types/Slide";
import {generate} from "../../Utils/generate";
import {
    DEFAULT_ELEMENT_FILL, DEFAULT_FONT_SIZE, DEFAULT_NO_SOURCE_IMAGE, DEFAULT_POSITION, DEFAULT_POSITION1, DEFAULT_POSITION2,
    DEFAULT_PRESENTATION_TITLE, DEFAULT_SIZE,
    DEFAULT_SLIDE_BACKGROUND_COLOR,
    DEFAULT_SLIDE_TITLE, DEFAULT_TEXT_COLOR, DEFAULT_TEXTBOX_CONTENT
} from "../Constants";
import {Circle, CommonType, Picture, Rectangle, TextBox, Triangle} from "../Types/Element";

export const getInitialSlideState = (): Slide => {
    return {
        id: generate(),
        title: DEFAULT_SLIDE_TITLE,
        elements: [],
        background: DEFAULT_SLIDE_BACKGROUND_COLOR
    }
}

export const INITIAL_PRESENTATION_STATE: Presentation = {
    title: DEFAULT_PRESENTATION_TITLE,
    slides: [getInitialSlideState()]
}

export const INITIAL_EDITOR_STATE: Editor = {
    presentation: INITIAL_PRESENTATION_STATE,
    selectedSlideIds: [INITIAL_PRESENTATION_STATE.slides[0].id],
    selectedElementIds: [],
    currentSlideId: INITIAL_PRESENTATION_STATE.slides[0].id
}

const INITIAL_COMMON_STATE: CommonType = {
    position: DEFAULT_POSITION,
    size: DEFAULT_SIZE,
    border: null,
    fill: DEFAULT_ELEMENT_FILL
}

export const INITIAL_RECTANGLE_STATE: Rectangle = INITIAL_COMMON_STATE;

export const INITIAL_TRIANGLE_STATE: Triangle = {
    ...INITIAL_COMMON_STATE,
    position1: DEFAULT_POSITION1,
    position2: DEFAULT_POSITION2
}

export const INITIAL_CIRCLE_STATE: Circle = INITIAL_COMMON_STATE;

export const INITIAL_PICTURE_STATE: Picture = {
    ...INITIAL_COMMON_STATE,
    src: DEFAULT_NO_SOURCE_IMAGE
}

export const INITIAL_TEXTBOX_STATE: TextBox = {
    ...INITIAL_COMMON_STATE,
    content: DEFAULT_TEXTBOX_CONTENT,
    fontFamily: "sans-serif",
    fontSize: DEFAULT_FONT_SIZE,
    textColor: DEFAULT_TEXT_COLOR,
}
