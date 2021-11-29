import {BorderType, Color} from "./StyleTypes";

export type Rectangle = {
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
    readonly border: BorderType;
    readonly fill: Color|null;
}
