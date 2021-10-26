import {Common} from "./Common";

type Triangle = Common & {
    readonly x2: number;
    readonly x3: number;
    readonly y2: number;
    readonly y3: number;
}

export type {
    Triangle,
}