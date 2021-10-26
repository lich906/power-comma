import {Common, Color} from "./Common";

type Text = {
    readonly color: Color;
    readonly font: string;
    readonly fontSize: number;
    readonly content: string;
}

type TextBox = Common & {
    readonly x2: number;
    readonly y2: number;
    readonly content: Text;
}

export type {
    TextBox,
    Text,
}