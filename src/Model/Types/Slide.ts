import {Circle, Picture, Rectangle, TextBox, Triangle} from "./Element";
import {Color} from "./StyleTypes";


export type Element = (Rectangle|Triangle|Circle|Picture|TextBox) & {
    readonly typeName: string;
    readonly id: string;
}

export type Slide = {
    readonly title: string;
    readonly elements: Element[];
    readonly background: Picture|Color;
    readonly id: string;
}
