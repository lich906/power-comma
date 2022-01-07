import {SlideAction} from "../ActionTypes";
import {elementType} from "../../../Types/Element";
import {openImageBase64} from "../../../../AdditionalFunctions/openImageBase64";

export const ADD_NEW_ELEMENT = 'addNewElement';
export function addNewElement(slideId: string, type: elementType, src?: string): SlideAction {
    return {
        type: ADD_NEW_ELEMENT,
        slideId: slideId,
        elementType: type,
        src: src
    }
}

export const addDefaultImageElement = (slideId: string): SlideAction => addNewElement(slideId, elementType.picture);

export const addImageElement = async (slideId: string) => {
    const image = await openImageBase64();
    addNewElement(slideId, elementType.picture, image.src)
};
