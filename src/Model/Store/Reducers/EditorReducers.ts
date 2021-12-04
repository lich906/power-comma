import {getInitialEditorState, getInitialPresentationState} from "../getInitialState";
import {AnyAction} from "redux";
import {OPEN_PRESENTATION} from "../Actions/Editor/openPresentation";
import {CLOSE_PRESENTATION} from "../Actions/Editor/closePresentation";
import {UPDATE_SLIDES_SELECTION} from "../Actions/Editor/updateSlidesSelection";
import {Presentation} from "../../Types/Presentation";
import {Editor} from "../../Types/Editor";
import {UPDATE_ELEMENTS_SELECTION} from "../Actions/Editor/updateElementsSelection";
import {CHANGE_CURRENT_SLIDE} from "../Actions/Editor/changeCurrentSlide";

const presentation = (state: Presentation|null = getInitialPresentationState(), action: AnyAction): Presentation|null => {
    switch (action.type) {
        case OPEN_PRESENTATION:
            let fs = require('fs');
            const data: string = fs.readFile(`./data/${action.fileName}`, 'utf8');
            return JSON.parse(data);
        case CLOSE_PRESENTATION:
            return null;
        default:
            return null;
    }
}

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
        presentation: presentation(state.presentation, action),
        selectedSlideIds: selectedSlideIds(state.selectedSlideIds, action),
        selectedElementsIds: selectedElementsIds(state.selectedElementIds, action),
        currentSlideId: currentSlideId(state.currentSlideId, action)
    }
}
