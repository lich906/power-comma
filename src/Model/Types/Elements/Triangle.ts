import {BorderType, Color} from "./StyleTypes";

export type Triangle = {
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
    readonly x3: number;
    readonly y3: number;
    readonly border: BorderType;
    readonly fill: Color|null;
}
