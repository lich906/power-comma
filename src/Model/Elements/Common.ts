type Color = {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
}

type BorderType = {
    readonly isBordered: boolean;
    readonly width: number;
    readonly color: Color;
}

type FillType = {
    readonly isFill: boolean;
    readonly color: Color;
}

type Common = {
    readonly x1: number;
    readonly y1: number;
    readonly border: BorderType;
    readonly fill: FillType;
    readonly Id: number;
}

export type {
    Color,
    Common,
}