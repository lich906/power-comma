import {INITIAL_EDITOR_STATE} from "../InitialStates";
import {AnyAction} from "redux";
import {UPDATE_SLIDES_SELECTION} from "../Actions/Editor/updateSlidesSelection";
import {Editor} from "../../Types/Editor";
import {UPDATE_ELEMENTS_SELECTION} from "../Actions/Editor/updateElementsSelection";
import {CHANGE_CURRENT_SLIDE} from "../Actions/Editor/changeCurrentSlide";
import {PresentationReducers} from "./PresentationReducers";
import {DELETE_ELEMENTS} from "../Actions/Slide/deleteElements";
import {DELETE_SLIDES} from "../Actions/Presentation/deleteSlides";
import {DELETE_SLIDE_BY_ID} from "../Actions/Presentation/deleteSlideById";

const selectedSlideIds = (state: string[] = [], action: AnyAction): string[] => {
    switch (action.type) {
        case UPDATE_SLIDES_SELECTION:
            return action.ids;
        case DELETE_SLIDES:
            return [];
        case DELETE_SLIDE_BY_ID:
            return state.filter((id) => id !== action.id);
        default:
            return state;
    }
}

const selectedElementIds = (state: string[] = [], action: AnyAction): string[] => {
    switch (action.type) {
        case UPDATE_ELEMENTS_SELECTION:
            return action.ids;
        case DELETE_ELEMENTS:
            return [];
        default:
            return state;
    }
}

const currentSlideId = (state: string|null = null, action: AnyAction): string|null => {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
            return action.id;
        case DELETE_SLIDE_BY_ID:
            return state === action.id ? null : state;
        default:
            return state;
    }
}

export const EditorReducers = (state: Editor = INITIAL_EDITOR_STATE, action: AnyAction): Editor => {
    return {
        presentation: PresentationReducers(state.presentation, action),
        selectedSlideIds: selectedSlideIds(state.selectedSlideIds, action),
        selectedElementIds: selectedElementIds(state.selectedElementIds, action),
        currentSlideId: currentSlideId(state.currentSlideId, action)
    }
}
