import {Common} from "./Common";

type Rectangle = Common & {
    readonly x2: number;
    readonly y2: number;
}

export type {
    Rectangle,
}