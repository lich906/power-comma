import {getInitialSlideState} from "../InitialStates";
import {Slide} from "../../Types/Slide";
import {CHANGE_SLIDE_TITLE} from "../Actions/Slide/changeSlideTitle";
import {Picture} from "../../Types/Element";
import {Color} from "../../Types/StyleTypes";
import {SlideAction} from "../Actions/ActionTypes";
import {Element} from "../../Types/Element";
import {DEFAULT_SLIDE_BACKGROUND_COLOR, DEFAULT_SLIDE_TITLE} from "../../Constants";

const title = (state: string = DEFAULT_SLIDE_TITLE, action: SlideAction): string => {
    switch (action.type) {
        case CHANGE_SLIDE_TITLE:
            return action.title;
        default:
            return state;
    }
}

const background = (state: Picture|Color = DEFAULT_SLIDE_BACKGROUND_COLOR, action: SlideAction) => {
    switch (action.type) {
        default:
            return state;
    }
}

const elements = (state: Element[] = [], action: SlideAction): Element[] => {
    switch (action.type) {
        default:
            return state;
    }
}

export const SlideReducers = (state: Slide = getInitialSlideState(), action: SlideAction): Slide => {
    return {
        title: title(state.title, action),
        background: background(state.background, action),
        elements: elements(state.elements, action),
        id: state.id
    }
}