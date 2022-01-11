import {SlideAction} from "../ActionTypes";

export const DELETE_ELEMENTS = 'deleteElements';
export function deleteElements(slideId: string, ids: string[]): SlideAction {
    return {
        type: DELETE_ELEMENTS,
        slideId: "",
        ids: ids
    }
}