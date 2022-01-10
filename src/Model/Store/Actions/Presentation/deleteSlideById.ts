import {AnyAction} from "redux";

export const DELETE_SLIDE_BY_ID = 'deleteSlideById';
export function deleteSlideById(id: string): AnyAction {
    return {
        type: DELETE_SLIDE_BY_ID,
        id: id
    }
}