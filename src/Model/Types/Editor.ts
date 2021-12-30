import {Presentation} from "./Presentation";

export type Editor = {
    readonly presentation: Presentation;
    readonly selectedSlideIds: string[];
    readonly selectedElementIds: string[];
    readonly currentSlideId: string|null;

}
