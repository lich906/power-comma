import {AnyAction} from "redux";
import {CommonType, Element, elementType, Picture, TextBox} from "../../Types/Element";
import {AnchorType, BorderType, Color, SizeType} from "../../Types/ExtraTypes";
import {SET_BORDER_WIDTH} from "../Actions/Elements/setBorderWidth";
import {SET_BORDER_COLOR} from "../Actions/Elements/setBorderColor";
import {DISABLE_BORDER} from "../Actions/Elements/disableBorder";
import {
    DEFAULT_BORDER_COLOR,
    DEFAULT_BORDER_WIDTH,
    DEFAULT_ELEMENT_FILL,
    DEFAULT_FONT_FAMILY,
    DEFAULT_FONT_SIZE,
    DEFAULT_NO_SOURCE_IMAGE,
    DEFAULT_POSITION,
    DEFAULT_SIZE,
    DEFAULT_TEXT_COLOR, DEFAULT_TEXTBOX_CONTENT
} from "../../Constants";
import {DISABLE_FILL} from "../Actions/Elements/disableFill";
import {SET_FILL_COLOR} from "../Actions/Elements/setFillColor";
import {UPDATE_POSITION} from "../Actions/Elements/updatePosition";
import {UPDATE_SIZE} from "../Actions/Elements/updateSize";
import {CHANGE_IMAGE_SOURCE} from "../Actions/Elements/changeImageSource";
import {SET_TEXT_COLOR} from "../Actions/Elements/setTextColor";
import {SET_FONT_FAMILY} from "../Actions/Elements/setFontFamily";
import {SET_FONT_SIZE} from "../Actions/Elements/setFontSize";
import {SET_TEXTBOX_CONTENT} from "../Actions/Elements/setTextboxContent";

const position = (state: AnchorType = DEFAULT_POSITION, action: AnyAction): AnchorType => {
    if (action.type === UPDATE_POSITION) {
        return {
            x: state.x + action.delta.x,
            y: state.y + action.delta.y
        }
    }
    return state;
}

const size = (state: SizeType = DEFAULT_SIZE, action: AnyAction): SizeType => {
    if (action.type === UPDATE_SIZE) {
        return {
            width: state.width + action.delta.width,
            height: state.height + action.delta.height
        }
    }
    return state;
}

const border = (state: BorderType|null = null, action: AnyAction): BorderType|null => {
    switch (action.type) {
        case SET_BORDER_WIDTH:
            if (state) {
                return {...state, width: action.width}
            }
            return {
                width: action.width,
                color: DEFAULT_BORDER_COLOR
            }
        case SET_BORDER_COLOR:
            if (state) {
                return {...state, color: action.color}
            }
            return {
                width: DEFAULT_BORDER_WIDTH,
                color: action.color
            }
        case DISABLE_BORDER:
            return null;
        default:
            return state;
    }
}

const fill = (state: Color|null = DEFAULT_ELEMENT_FILL, action: AnyAction): Color|null => {
    switch (action.type) {
        case DISABLE_FILL:
            return null;
        case SET_FILL_COLOR:
            return action.color;
        default:
            return state;
    }
}

const src = (state: string = DEFAULT_NO_SOURCE_IMAGE, action: AnyAction): string => {
    if (action.type === CHANGE_IMAGE_SOURCE) {
        return action.src;
    }
    return state;
}

const textColor = (state: Color = DEFAULT_TEXT_COLOR, action: AnyAction): Color => {
    if (action.type === SET_TEXT_COLOR) {
        return action.color;
    }
    return state;
}

const fontFamily = (state: string = DEFAULT_FONT_FAMILY, action: AnyAction): string => {
    if (action.type === SET_FONT_FAMILY) {
        return action.fontFamily;
    }
    return state;
}

const fontSize = (state: number = DEFAULT_FONT_SIZE, action: AnyAction): number => {
    if (action.type === SET_FONT_SIZE) {
        return action.fontSize;
    }
    return state;
}

const content = (state: string = DEFAULT_TEXTBOX_CONTENT, action: AnyAction): string => {
    if (action.type === SET_TEXTBOX_CONTENT) {
        return action.content;
    }
    return state;
}

export const ElementReducers = (state: Element, action: AnyAction): Element => {
    const commonReducers: CommonType = {
        position: position(state.position, action),
        size: size(state.size, action),
        border: border(state.border, action),
        fill: fill(state.fill, action)
    }
    switch (state.type) {
        case elementType.rectangle:
            return {
                ...commonReducers,
                type: state.type,
                id: state.id
            };
        case elementType.circle:
            return {
                ...commonReducers,
                type: state.type,
                id: state.id
            };
        case elementType.triangle:
            return {
                ...commonReducers,
                type: state.type,
                id: state.id
            };
        case elementType.picture:
            return {
                ...commonReducers,
                src: src((state as Picture).src, action),
                type: state.type,
                id: state.id
            }
        case elementType.textBox:
            return {
                ...commonReducers,
                textColor: textColor((state as TextBox).textColor, action),
                fontFamily: fontFamily((state as TextBox).fontFamily, action),
                fontSize: fontSize((state as TextBox).fontSize, action),
                content: content((state as TextBox).content, action),
                type: elementType.textBox,
                id: state.id
            }
        default:
            return state;
    }
}