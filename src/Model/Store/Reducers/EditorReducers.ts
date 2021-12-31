import {initialEditorState} from "../InitialStates";
import {AnyAction} from "redux";
import {UPDATE_SLIDES_SELECTION} from "../Actions/Editor/updateSlidesSelection";
import {Editor} from "../../Types/Editor";
import {UPDATE_ELEMENTS_SELECTION} from "../Actions/Editor/updateElementsSelection";
import {CHANGE_CURRENT_SLIDE} from "../Actions/Editor/changeCurrentSlide";
import {PresentationReducers} from "./PresentationReducers";

const selectedSlideIds = (state: string[] = [], action: AnyAction): string[] => {
    switch (action.type) {
        case UPDATE_SLIDES_SELECTION:
            return action.slideIds
        default:
            return state;
    }
}

const selectedElementsIds = (state: string[] = [], action: AnyAction): string[] => {
    switch (action.type) {
        case UPDATE_ELEMENTS_SELECTION:
            return action.elementIds
        default:
            return state;
    }
}

const currentSlideId = (state: string|null = null, action: AnyAction): string|null => {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
            return action.slideId;
        default:
            return state;
    }
}

export const EditorReducers = (state: Editor = initialEditorState, action: AnyAction): any => {
    return {
        presentation: PresentationReducers(state.presentation, action),
        selectedSlideIds: selectedSlideIds(state.selectedSlideIds, action),
        selectedElementsIds: selectedElementsIds(state.selectedElementIds, action),
        currentSlideId: currentSlideId(state.currentSlideId, action)
    }
}
