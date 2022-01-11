import {AnyAction} from "redux";

export type SlideAction = AnyAction & {
    slideId: string
}

export type ElementAction = SlideAction & {
    elementId: string
}
