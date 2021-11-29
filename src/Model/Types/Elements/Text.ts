import {Color, BorderType} from "./StyleTypes";

export type Text = {
    readonly color: Color;
    readonly font: string;
    readonly fontSize: number;
    readonly content: string;
}

export type TextBox = {
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
    readonly border: BorderType;
    readonly fill: Color|null;
    readonly content: Text;
}
