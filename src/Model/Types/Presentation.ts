import {Slide} from "./Slide"

export type Presentation = {
    readonly fileName: string|null;
    readonly title: string;
    readonly slides: Slide[];
}
