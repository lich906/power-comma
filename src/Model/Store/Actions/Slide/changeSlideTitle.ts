import {SlideAction} from "../ActionTypes";

export const CHANGE_SLIDE_TITLE = 'changeSlideTitle';
export function changeSlideTitle(slideId: string, title: string): SlideAction {
    return {
        type: CHANGE_SLIDE_TITLE,
        slideId: slideId,
        title: title
    }
}