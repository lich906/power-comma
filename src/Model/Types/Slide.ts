import {Element} from "./Element";
import {BackgroundPicture, Color} from "./StyleTypes";

export type Slide = {
    readonly title: string;
    readonly elements: Element[];
    readonly background: BackgroundPicture|Color;
    readonly id: string;
}

export enum slideBackgroundType {
    picture,
    color
}
