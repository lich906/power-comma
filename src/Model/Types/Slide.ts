import {Element, Picture} from "./Element";
import {Color} from "./StyleTypes";

export type Slide = {
    readonly title: string;
    readonly elements: Element[];
    readonly background: Picture|Color;
    readonly id: string;
}

export enum slideBackgroundType {
    picture,
    color
}
