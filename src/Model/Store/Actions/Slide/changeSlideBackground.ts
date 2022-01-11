import {SlideAction} from "../ActionTypes";
import {slideBackgroundType} from "../../../Types/Slide";

export const CHANGE_SLIDE_BACKGROUND_COLOR = 'changeSlideBackgroundColor';
export const CHANGE_SLIDE_BACKGROUND_PICTURE = 'changeSlideBackgroundPicture';
export function changeSlideBackground(slideId: string, type: slideBackgroundType, payload: string): SlideAction {
    switch (type) {
        case slideBackgroundType.color:
            return {
                type: CHANGE_SLIDE_BACKGROUND_COLOR,
                slideId: slideId,
                payload: payload
            }
        case slideBackgroundType.picture:
            return {
                type: CHANGE_SLIDE_BACKGROUND_PICTURE,
                slideId: slideId,
                payload: payload
            }
    }
}