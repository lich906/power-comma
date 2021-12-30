import {Presentation} from "./Presentation";

export type Editor = {
    readonly presentation: Presentation|null;
    readonly selectedSlideIds: string[];
    readonly selectedElementIds: string[];
    readonly currentSlideId: string|null;

}
