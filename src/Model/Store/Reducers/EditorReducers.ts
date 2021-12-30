import {getInitialEditorState, getInitialPresentationState} from "../getInitialState";
import {AnyAction} from "redux";
import {UPDATE_SLIDES_SELECTION} from "../Actions/Editor/updateSlidesSelection";
import {Editor} from "../../Types/Editor";
import {UPDATE_ELEMENTS_SELECTION} from "../Actions/Editor/updateElementsSelection";
import {CHANGE_CURRENT_SLIDE} from "../Actions/Editor/changeCurrentSlide";
import {PresentationReducers} from "./PresentationReducers";

const selectedSlideIds = (state: string[] = [], action: AnyAction): number[] => {
    switch (action.type) {
        case UPDATE_SLIDES_SELECTION:
            return action.slideIds
        default:
            return [];
    }
}

const selectedElementsIds = (state: string[] = [], action: AnyAction): number[] => {
    switch (action.type) {
        case UPDATE_ELEMENTS_SELECTION:
            return action.elementIds
        default:
            return [];
    }
}

const currentSlideId = (state: string|null = null, action: AnyAction): number|null => {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
            return action.slideId;
        default:
            return null;
    }
}

export const EditorReducers = (state: Editor = getInitialEditorState(), action: AnyAction): any => {
    return {
        presentation: PresentationReducers(state.presentation, action),
        selectedSlideIds: selectedSlideIds(state.selectedSlideIds, action),
        selectedElementsIds: selectedElementsIds(state.selectedElementIds, action),
        currentSlideId: currentSlideId(state.currentSlideId, action)
    }
}
