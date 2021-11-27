import {Color} from "./Elements/Common";
import {Circle} from "./Elements/Circle"
import {Triangle} from "./Elements/Triangle";
import {Rectangle} from "./Elements/Rectangle";
import {Picture} from "./Elements/Picture";
import {TextBox} from "./Elements/Text";

export type ElementType = (Rectangle | Triangle | Circle | Picture | TextBox) & {
    readonly typeName: string;
    id: number;
};

export type Slide = {
    readonly title: string;
    readonly elements: Array<ElementType>;
    readonly background: Picture | Color;
    readonly id: number;
}

export function getSlideId(slide: Slide): number {
    return slide.id;
}

export function createSlide(id: number): Slide {
    return {
        title: 'New Slide',
        elements: [],
        background: {
            red: 255,
            green: 255,
            blue: 255,
            alpha: 1.0
        },
        id: id
    }
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

export function getElementById(slide: Slide, id: number): ElementType {
    return slide.elements.filter(element => element.id === id)[0];
}