import {Common, Color} from "./Common";

export type Text = {
    readonly color: Color;
    readonly font: string;
    readonly fontSize: number;
    readonly content: string;
}

export type TextBox = Common & {
    readonly x2: number;
    readonly y2: number;
    readonly content: Text;
}
