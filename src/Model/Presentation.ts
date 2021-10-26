import {Slide} from "./Slide"

type Presentation = {
    readonly title: string;
    readonly slides: Array<Slide>;
}

export type {
    Presentation,
}
