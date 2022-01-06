import {AnyAction} from "redux";
import {CommonType, Element, elementType} from "../../Types/Element";
import {BorderType, Color} from "../../Types/StyleTypes";
import {SET_BORDER_WIDTH} from "../Actions/Elements/setBorderWidth";
import {SET_BORDER_COLOR} from "../Actions/Elements/setBorderColor";
import {DISABLE_BORDER} from "../Actions/Elements/disableBorder";
import {DEFAULT_BORDER_COLOR, DEFAULT_BORDER_WIDTH, DEFAULT_ELEMENT_FILL} from "../../Constants";
import {DISABLE_FILL} from "../Actions/Elements/disableFill";
import {SET_FILL_COLOR} from "../Actions/Elements/setFillColor";

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

export const ElementReducers = (state: Element, action: AnyAction): Element => {
    const commonReducers: CommonType = {
        border: border(state.border, action),
        fill: fill(state.fill, action),
        height: 0,
        width: 0,
        x: 0,
        y: 0
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
        case elementType.textBox:
        default:
            return state;
    }
}