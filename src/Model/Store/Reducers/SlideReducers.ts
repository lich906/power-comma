import {getInitialSlideState} from "../InitialStates";
import {Slide, Element} from "../../Types/Slide";
import {Picture} from "../../Types/Element";
import {Color} from "../../Types/StyleTypes";
import {AnyAction} from "redux";
/* 
    CHANGE_SLIDE_TITLE
    CHANGE_SLIDE_BACKGROUND
*/
const CHANGE_SLIDE_TITLE = "CHANGE_SLIDE_TITLE";
const CHANGE_SLIDE_BACKGROUND = "CHANGE_SLIDE_BACKGROUND";




const elements = (state: Element[] = [], action: AnyAction): Element[] => {
    let newState: Slide[] = [];
    let startIndex, endIndex: number;
    switch (action.type) {
        case CHANGE_SLIDE_BACKGROUND:
            return state;
        default:
            return state;
    }
}




const title = (state: string, action: AnyAction): string => {
    switch (action.type) {
        case CHANGE_SLIDE_TITLE:
            return action.title;
        default:
            return state;
    }
}

const background = (state: Picture|Color, action: AnyAction): Picture|Color => {
    switch (action.type) {
        case CHANGE_SLIDE_BACKGROUND:
            return action.title;
        default:
            return state;
    }
}

export const SlideReducers = (state: Slide = getInitialSlideState(), action: AnyAction): any => {
    return {
        title: title(state.title, action),
        elements: elements(state.elements, action),
        background: background(state.background, action),
    }
}