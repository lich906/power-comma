import {Slide} from "../../Types/Slide";
import {AnyAction} from "redux";
import {CREATE_NEW_SLIDE} from "../Actions/Presentation/createNewSlide";
import {initialPresentationState, getInitialSlideState} from "../InitialStates";
import {Presentation} from "../../Types/Presentation";
import {DELETE_SLIDES} from "../Actions/Presentation/deleteSlides";
import {MOVE_SELECTED_SLIDES_DOWN, MOVE_SELECTED_SLIDES_UP} from "../Actions/Presentation/moveSelectedSlides";
import {CHANGE_PRESENTATION_TITLE} from "../Actions/Presentation/changePresentationTitle";
import {last} from "../../../Utils/array";

const slides = (state: Slide[] = [getInitialSlideState()], action: AnyAction): Slide[] => {
    let newState: Slide[] = [];
    let startIndex, endIndex: number;
    switch (action.type) {
        case CREATE_NEW_SLIDE:
            return state.concat([getInitialSlideState()]);
        case DELETE_SLIDES:
            return state.filter((slide) => !action.slideIds.includes(slide.id))
        case MOVE_SELECTED_SLIDES_UP:
            startIndex = state.findIndex((slide) => action.slideIds[0] === slide.id);
            if (startIndex === 0) {
                return state;
            }
            endIndex = state.findIndex((slide) => last(action.slideIds) === slide.id);
            newState = state.slice(0, startIndex - 1);
            newState.push(...state.slice(startIndex, endIndex + 1));
            newState.push(state[startIndex - 1]);
            newState.push(...state.slice(endIndex + 1));
            return newState;
        case MOVE_SELECTED_SLIDES_DOWN:
            startIndex = state.findIndex((slide) => action.slideIds[0] === slide.id);
            endIndex = state.findIndex((slide) => last(action.slideIds) === slide.id);
            if (endIndex === state.length - 1) {
                return state;
            }
            newState = state.slice(0, startIndex);
            newState.push(state[endIndex + 1]);
            newState.push(...state.slice(startIndex, endIndex + 1));
            newState.push(...state.slice(endIndex + 2));
            return newState;
        default:
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

export const PresentationReducers = (state: Presentation = initialPresentationState, action: AnyAction): any => {
    return {
        slides: slides(state.slides, action),
        title: title(state.title, action),
    }
}