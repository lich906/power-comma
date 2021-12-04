import {Presentation} from "./Presentation";

export type Editor = {
    readonly presentation: Presentation|null;
    readonly selectedSlideIds: number[];
    readonly selectedElementIds: number[];
    readonly currentSlideId: number|null;
}
