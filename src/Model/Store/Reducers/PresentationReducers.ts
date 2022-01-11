import {Slide} from "../../Types/Slide";
import {AnyAction} from "redux";
import {CREATE_NEW_SLIDE} from "../Actions/Presentation/createNewSlide";
import {INITIAL_PRESENTATION_STATE, getInitialSlideState} from "../InitialStates";
import {Presentation} from "../../Types/Presentation";
import {DELETE_SLIDES} from "../Actions/Presentation/deleteSlides";
import {MOVE_SELECTED_SLIDES_DOWN, MOVE_SELECTED_SLIDES_UP} from "../Actions/Presentation/moveSelectedSlides";
import {CHANGE_PRESENTATION_TITLE} from "../Actions/Presentation/changePresentationTitle";
import {last, pushImmutable, replaceAtIndexImmutable} from "../../../Utils/array";
import {SlideReducers} from "./SlideReducers";
import {DELETE_SLIDE_BY_ID} from "../Actions/Presentation/deleteSlideById";

const slides = (state: Slide[] = [getInitialSlideState()], action: AnyAction): Slide[] => {
    let newState: Slide[] = [];
    let startIndex, endIndex: number;
    switch (action.type) {
        case CREATE_NEW_SLIDE:
            return pushImmutable(state, getInitialSlideState());

        case DELETE_SLIDES:
            return state.filter((slide) => !action.ids.includes(slide.id));

        case DELETE_SLIDE_BY_ID:
            return state.filter((slide) => slide.id !== action.id);

        case MOVE_SELECTED_SLIDES_UP:
            startIndex = state.findIndex((slide) => action.ids[0] === slide.id);
            if (startIndex === 0) {
                return state;
            }
            endIndex = state.findIndex((slide) => last(action.ids) === slide.id);
            newState = state.slice(0, startIndex - 1);
            newState.push(...state.slice(startIndex, endIndex + 1));
            newState.push(state[startIndex - 1]);
            newState.push(...state.slice(endIndex + 1));
            return newState;

        case MOVE_SELECTED_SLIDES_DOWN:
            startIndex = state.findIndex((slide) => action.ids[0] === slide.id);
            endIndex = state.findIndex((slide) => last(action.ids) === slide.id);
            if (endIndex === state.length - 1) {
                return state;
            }
            newState = state.slice(0, startIndex);
            newState.push(state[endIndex + 1]);
            newState.push(...state.slice(startIndex, endIndex + 1));
            newState.push(...state.slice(endIndex + 2));
            return newState;

        default:
            if (action.slideId) {
                const slideIndex = state.findIndex((slide) => slide.id === action.slideId);
                const slide = SlideReducers(state[slideIndex], action);
                return replaceAtIndexImmutable(state, slideIndex, slide);
            }
            return state;
    }
}

const title = (state: string, action: AnyAction): string => {
    switch (action.type) {
        case CHANGE_PRESENTATION_TITLE:
            return action.title;
        default:
            return state;
    }
}

export const PresentationReducers = (state: Presentation = INITIAL_PRESENTATION_STATE, action: AnyAction): Presentation => {
    return {
        slides: slides(state.slides, action),
        title: title(state.title, action),
    }
}