import {getInitialSlideState} from "../InitialStates";
import {Slide} from "../../Types/Slide";
import {CHANGE_SLIDE_TITLE} from "../Actions/Slide/changeSlideTitle";
import {Circle, Element, elementType, Picture, Rectangle, TextBox, Triangle} from "../../Types/Element";
import {BackgroundPicture, Color} from "../../Types/StyleTypes";
import {DEFAULT_SLIDE_BACKGROUND_COLOR, DEFAULT_SLIDE_TITLE} from "../../Constants";
import {
    INITIAL_CIRCLE_STATE, INITIAL_PICTURE_STATE,
    INITIAL_RECTANGLE_STATE, INITIAL_TEXTBOX_STATE,
    INITIAL_TRIANGLE_STATE
} from "../InitialStates"
import {AnyAction} from "redux";
import {ADD_NEW_ELEMENT} from "../Actions/Slide/addNewElement";
import {CHANGE_SLIDE_BACKGROUND_COLOR, CHANGE_SLIDE_BACKGROUND_PICTURE} from "../Actions/Slide/changeSlideBackground";
import {generate} from "../../../Utils/generate";
import {DELETE_ELEMENTS} from "../Actions/Slide/deleteElements";
import {DRAG_ELEMENTS} from "../Actions/Slide/dragElements";
import {ElementReducers} from "./ElementReducers";
import {replaceAtIndexImmutable} from "../../../Utils/array";

const title = (state: string = DEFAULT_SLIDE_TITLE, action: AnyAction): string => {
    if (action.type === CHANGE_SLIDE_TITLE) {
        return action.title;
    }
    return state;
}

const background = (state: BackgroundPicture|Color = DEFAULT_SLIDE_BACKGROUND_COLOR, action: AnyAction) => {
    switch (action.type) {
        case CHANGE_SLIDE_BACKGROUND_COLOR:
            return {hex: action.payload}
        case CHANGE_SLIDE_BACKGROUND_PICTURE:
            return {src: action.payload}
        default:
            return state;
    }
}

const elements = (state: Element[] = [], action: AnyAction): Element[] => {
    switch (action.type) {
        case ADD_NEW_ELEMENT:
            let newElement: Rectangle | Triangle | Circle | Picture | TextBox;
            switch (action.elementType) {
                case elementType.rectangle:
                    newElement = INITIAL_RECTANGLE_STATE;
                    return state.concat({
                        ...newElement,
                        type: elementType.rectangle,
                        id: generate()
                    });
                case elementType.triangle:
                    newElement = INITIAL_TRIANGLE_STATE;
                    return [...state, {
                        ...newElement,
                        type: elementType.triangle,
                        id: generate()
                    }];
                case elementType.circle:
                    newElement = INITIAL_CIRCLE_STATE;
                    return [...state, {
                        ...newElement,
                        type: elementType.circle,
                        id: generate()
                    }];
                case elementType.picture:
                    newElement = INITIAL_PICTURE_STATE;
                    return [...state, {
                        ...newElement,
                        type: elementType.picture,
                        id: generate()
                    }];
                case elementType.textBox:
                    newElement = INITIAL_TEXTBOX_STATE;
                    return [...state, {
                        ...newElement,
                        type: elementType.textBox,
                        id: generate()
                    }];
                default:
                    return state;
            }

        case DELETE_ELEMENTS:
            return state.filter((element) => !action.ids.includes(element.id));

        case DRAG_ELEMENTS:
            return state.map((element) => {
                if (action.ids.includes(element.id)) {
                    return {
                        ...element,
                        x: element.x + action.dx,
                        y: element.y + action.dy
                    }
                }
                return element;
            });

        default:
            if (action.elementId) {
                const elementId = state.findIndex((element) => element.id === action.elementId);
                const element = ElementReducers(state[elementId], action);
                return replaceAtIndexImmutable(state, elementId, element);
            }
            return state;
    }
}

export const SlideReducers = (state: Slide = getInitialSlideState(), action: AnyAction): Slide => {
    return {
        title: title(state.title, action),
        background: background(state.background, action),
        elements: elements(state.elements, action),
        id: state.id
    }
}