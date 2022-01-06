import {Color} from "./Types/StyleTypes";
import {Circle, Picture, Rectangle, TextBox, Triangle} from "./Types/Element";
import {CommonType} from "./Types/Element";

export const DEFAULT_SLIDE_TITLE = 'New Slide';
export const DEFAULT_PRESENTATION_TITLE = 'Untitled';
export const PRESENTATION_FILE_EXTENSION = '.pcp';

export const DEFAULT_SLIDE_BACKGROUND_COLOR: Color = {
    hex: '#ffffff'
}

export const DEFAULT_BORDER_WIDTH: number = 1;

export const DEFAULT_BORDER_COLOR: Color = {
    hex: '#000000'
};

export const DEFAULT_ELEMENT_FILL: Color = {
    hex: '#038fee'
}

const DEFAULT_TEXT_COLOR: Color = {
    hex: '#4b4b4b'
}

const INITIAL_COMMON_STATE: CommonType = {
    border: null,
    fill: DEFAULT_ELEMENT_FILL,
    height: 200,
    width: 200,
    x: 0,
    y: 0
}

export const INITIAL_RECTANGLE_STATE: Rectangle = INITIAL_COMMON_STATE;

export const INITIAL_TRIANGLE_STATE: Triangle = INITIAL_COMMON_STATE;

export const INITIAL_CIRCLE_STATE: Circle = INITIAL_COMMON_STATE;

export const INITIAL_PICTURE_STATE: Picture = {
    ...INITIAL_COMMON_STATE,
    src: 'url(\'\')'
}

export const INITIAL_TEXTBOX_STATE: TextBox = {
    ...INITIAL_COMMON_STATE,
    content: "Text...",
    fontFamily: "",
    fontSize: 0,
    textColor: DEFAULT_TEXT_COLOR,
}