

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
    readonly x1, y1: number;
    readonly border: BorderType;
    readonly fill: FillType;
}

type TextBoxType = CommonType & {
    readonly x2, y2: number;
    readonly content: TextType;
}

type PictureType = CommonType & {
    readonly h, w: number;
    readonly src: string;
}

type CircleType = CommonType & {
    readonly r: number;
}

type TriangleType = CommonType & {
    readonly x2, x3, y2, y3: number;
}

type Rectangle = {
    readonly x2, y2: number;
}

type ElementType = Rectangle | TriangleType | CircleType | PictureType | TextBoxType;

type SlideType = {
    readonly titel: TextType;
    readonly elements: Array<ElementType>;
    readonly background: PictureType | ColorType;
    readonly activeElements: Array<number>;
}

type PresentationType = {
    readonly title: string;
    readonly slider: Array<SlideType>;
}

type EditorType = {
    readonly presentation: PresentationType;
    readonly activeSlide: number;
}

