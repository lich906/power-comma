export type Color = {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
}

export type BorderType = {
    readonly isBordered: boolean;
    readonly width: number;
    readonly color: Color;
}

export type FillType = {
    readonly isFill: boolean;
    readonly color: Color;
}

export type Common = {
    readonly x1: number;
    readonly y1: number;
    readonly border: BorderType;
    readonly fill: FillType;
    readonly id: number;
}
