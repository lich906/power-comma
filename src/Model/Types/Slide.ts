import {Color} from "./Elements/StyleTypes";
import {Circle} from "./Elements/Circle"
import {Triangle} from "./Elements/Triangle";
import {Rectangle} from "./Elements/Rectangle";
import {Picture} from "./Elements/Picture";
import {TextBox} from "./Elements/Text";

export type ElementType = (Rectangle|Triangle|Circle|Picture|TextBox) & {
    readonly typeName: string;
    readonly id: string;
}

export type Slide = {
    readonly title: string;
    readonly elements: Array<ElementType>;
    readonly background: Picture|Color;
    readonly id: string;
    readonly order: number;
}

export function getSlideId(slide: Slide): string {
    return slide.id;
}

export function setSlideTitle(slide: Slide, title: string): Slide {
    return {
        ...slide,
        title: title
    }
}

export function setBackgroundPicture(slide: Slide, picture: Picture): Slide {
    return {
        ...slide,
        background: picture
    }
}

export function setBackgroundColor(slide: Slide, color: Color): Slide {
    return {
        ...slide,
        background: color
    }
}

export function addNewElement(slide: Slide, newElement: ElementType): Slide {
    return {
        ...slide,
        elements: slide.elements.concat(newElement)
    }
}

export function getElementType(element: ElementType): string {
    return element.typeName;
}

export function getElementById(slide: Slide, id: string): ElementType {
    return slide.elements.filter(element => element.id === id)[0];
}