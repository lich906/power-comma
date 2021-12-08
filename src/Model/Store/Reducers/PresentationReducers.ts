import {Slide} from "../../Types/Slide";
import {AnyAction} from "redux";
import {CREATE_NEW_SLIDE} from "../Actions/Presentation/createNewSlide";
import {getInitialPresentationState, getInitialSlideState} from "../getInitialState";
import {Presentation} from "../../Types/Presentation";
import {DELETE_SLIDES} from "../Actions/Presentation/deleteSlides";
import {MOVE_SELECTED_SLIDES_UP} from "../Actions/Presentation/moveSelectedSlides";
import {OPEN_PRESENTATION} from "../Actions/Editor/openPresentation";
import {CLOSE_PRESENTATION} from "../Actions/Editor/closePresentation";
import {appDispatch} from "../appDispatch";
import {reset} from "../Actions/History/reset";

const open = (state: Presentation|null, action: AnyAction): Presentation|undefined => {
    if (action.type === OPEN_PRESENTATION) {
        let fs = require('fs');
        const data: string = fs.readFile(`./data/${action.fileName}`, 'utf8');
        appDispatch(reset());
        return JSON.parse(data);
    }
}

const close = (state: Presentation|null, action: AnyAction) => {
    if (action.type === CLOSE_PRESENTATION) {
        return null
    }
}

const slides = (state: Slide[] = [getInitialSlideState(1)], slidesQuantity: number, action: AnyAction): Slide[]|null => {
    let newState: Slide[] = [];
    switch (action.type) {
        case CREATE_NEW_SLIDE:
            return state.concat([getInitialSlideState(slidesQuantity + 1)]);
        case DELETE_SLIDES:
            state.forEach((slide) => {
                if (!action.slideIds.includes(slide.id)) {
                    newState.push({...slide, order: newState.length + 1})
                }
            })
            return newState;
        case MOVE_SELECTED_SLIDES_UP:
            // TODO
            let minOrder: number|null = null;
            state.forEach((slide) => {
                if (action.slideIds.includes(slide.id)) {
                    if (minOrder) {
                        minOrder = slide.order < minOrder ? slide.order : minOrder;
                    } else {
                        minOrder = slide.order
                    }
                }
            })
            state.forEach((slide, index) => {
                if (action.slideIds.includes(slide.id)) {
                    newState.push({...slide, order: slide.order - 1})
                } else {
                    newState.push(slide)
                }
            })

            return newState;
        default:
            return null;
    }
}

const slidesQuantity = (state: number, action: AnyAction): number => {
    switch (action.type) {
        case DELETE_SLIDES:
            return state - action.slideIds.length;
        default:
            return 1
    }
}

export const PresentationReducers = (state: Presentation = getInitialPresentationState(), action: AnyAction): any => {
    return {
        slides: slides(state.slides, state.slidesQuantity, action),
        slidesQuantity: slidesQuantity(state.slidesQuantity, action),
        open: open(state, action),
        close: close(state, action)
    }
}