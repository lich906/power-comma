import {Slide} from "./Slide"

export type Presentation = {
    readonly title: string;
    readonly slides: Slide[];
}
