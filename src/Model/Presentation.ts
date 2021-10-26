import {Color} from "./Elements/Common";
import {Circle} from "./Elements/Circle"
import {Triangle} from "./Elements/Triangle";
import {Rectangle} from "./Elements/Rectangle";
import {Picture} from "./Elements/Picture";
import {TextBox} from "./Elements/Text";

type ElementType = Rectangle | Triangle | Circle | Picture | TextBox & {
    readonly typeName: string;
};

type SlideType = {
    readonly title: Text;
    readonly elements: Array<ElementType>;
    readonly background: Picture | Color;
    readonly id: number;
}

type Presentation = {
    readonly title: string;
    readonly slider: Array<SlideType>;
}

export type {
    Presentation,
    SlideType,
}