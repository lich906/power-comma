import {BorderType, Color} from "./StyleTypes";

export type Picture = {
    readonly x: number;
    readonly y: number;
    readonly border: BorderType|null;
    readonly fill: Color|null;
    readonly h: number;
    readonly w: number;
    readonly src: string;
}
