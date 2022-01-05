import {AnyAction} from "redux";
import {CHANGE_CURRENT_SLIDE} from "./Editor/changeCurrentSlide";
import {UPDATE_ELEMENTS_SELECTION} from "./Editor/updateElementsSelection";
import {UPDATE_SLIDES_SELECTION} from "./Editor/updateSlidesSelection";

export function isPresentationChangerAction(action: AnyAction): boolean {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
        case UPDATE_ELEMENTS_SELECTION:
        case UPDATE_SLIDES_SELECTION:
            return false;
        default:
            return true;
    }
}