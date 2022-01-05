import {BorderType, Color} from "./StyleTypes";

export type Circle = {
    readonly x: number;
    readonly y: number;
    readonly border: BorderType|null;
    readonly fill: Color|null;
    readonly r: number;
}


