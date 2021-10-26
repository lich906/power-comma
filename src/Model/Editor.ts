import {Presentation} from "./Presentation";

type Editor = {
    readonly presentation: Presentation;
    readonly activeSlide: Array<number>;
    readonly activeElements: Array<number>;
    readonly openSlide: number;
}

export type {
    Editor,
}
