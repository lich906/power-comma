import {AppDispatch} from "./AppStore";
import {AnyAction} from "redux";
import {update} from "./Actions/History/update";
import {CREATE_NEW_SLIDE} from "./Actions/Presentation/createNewSlide";
import {DELETE_ALL_SLIDES} from "./Actions/Presentation/deleteAllSlides";
import {CLOSE_PRESENTATION} from "./Actions/Editor/closePresentation";
import {DELETE_SLIDES} from "./Actions/Presentation/deleteSlides";
import {MOVE_SELECTED_SLIDES_DOWN, MOVE_SELECTED_SLIDES_UP} from "./Actions/Presentation/moveSelectedSlides";

function needToUpdate(actionType: string): boolean {
    switch (actionType) {
        case CREATE_NEW_SLIDE:
        case DELETE_ALL_SLIDES:
        case CLOSE_PRESENTATION:
        case DELETE_SLIDES:
        case MOVE_SELECTED_SLIDES_UP:
        case MOVE_SELECTED_SLIDES_DOWN:
            return true;
        default:
            return false;
    }
}

function updateHistoryOnDispatch(dispatch: AppDispatch, action: AnyAction): void {
    if (needToUpdate(action.type)) {
        dispatch(update());
    }
}

export const appDispatch = (dispatch: AppDispatch, action: AnyAction) => {
    updateHistoryOnDispatch(dispatch, action);
    dispatch(action);
}
