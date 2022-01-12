import {AnchorType, BorderType, Color, SizeType} from "./ExtraTypes";

export type CommonType = {
    readonly position: AnchorType;
    readonly size: SizeType;
    readonly border: BorderType|null;
    readonly fill: Color|null;
}

export type Circle = CommonType

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

export type Triangle = CommonType & {
    readonly position1: AnchorType;
    readonly position2: AnchorType;
}

export type Element = (Rectangle|Triangle|Circle|Picture|TextBox) & {
    readonly type: elementType;
    readonly id: string;
}

export enum elementType {
    textBox,
    rectangle,
    triangle,
    circle,
    picture
}
