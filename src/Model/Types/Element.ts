import {BorderType, Color} from "./StyleTypes";

type CommonType = {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly border: BorderType|null;
    readonly fill: Color|null;
}

export type Circle = CommonType & {
    readonly r: number;
}

export type Picture = CommonType & {
    readonly src: string;
}

export type Rectangle = CommonType

export type TextBox = CommonType & {
    readonly textColor: Color;
    readonly fontFamily: string;
    readonly fontSize: number;
    readonly content: string;
}

export type Triangle = CommonType