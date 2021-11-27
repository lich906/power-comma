type ColorType = {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
}

type TextType = {
    readonly color: ColorType;
    readonly font: string;
    readonly content: string;
}

type BorderType = {
    readonly isBordered: boolean;
    readonly width: number;
    readonly color: ColorType;
}

type FillType = {
    readonly isFill: boolean;
    readonly color: ColorType;
}

type CommonType = {
    readonly x1: number;
    readonly y1: number;
    readonly border: BorderType;
    readonly fill: FillType;
    readonly Id: number;
}

type TextBoxType = CommonType & {
    readonly x2: number;
    readonly y2: number;
    readonly content: TextType;
}

type PictureType = CommonType & {
    readonly h: number;
    readonly w: number;
    readonly src: string;
}

type CircleType = CommonType & {
    readonly r: number;
}

type TriangleType = CommonType & {
    readonly x2: number;
    readonly x3: number;
    readonly y2: number;
    readonly y3: number;
}

type RectangleType = {
    readonly x2: number;
    readonly y2: number;
}

type TypeType = {
    readonly name: string;
}

type ElementType = RectangleType | TriangleType | CircleType | PictureType | TextBoxType & {
    readonly type: TypeType;
};

type SlideType = {
    readonly title: TextType;
    readonly elements: Array<ElementType>;
    readonly background: PictureType | ColorType;
    readonly Id: number;
}

type PresentationType = {
    readonly title: string;
    readonly slider: Array<SlideType>;
}

type EditorType = {
    readonly presentation: PresentationType;
    readonly activeSlide: Array<number>;
    readonly activeElements: Array<number>;
    readonly openSlide: number;
}

export type {
    EditorType,
    PresentationType,
    SlideType,
    ElementType,
    TypeType,
    RectangleType,
    TriangleType,
    CircleType,
    PictureType,
    TextBoxType,
    CommonType,
    FillType,
    BorderType,
    TextType,
    ColorType
}
