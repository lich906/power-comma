import {Element} from "../../Types/Element";
import {selectCurrentSlide} from "./selectCurrentSlide";
import {selectSelectedElementIds} from "./selectSelectedElementIds";
import {AppState} from "../AppStore";

export function selectCurrentElement(state: AppState): Element|undefined {
    const selectedElementIds = selectSelectedElementIds(state);
    return selectCurrentSlide(state)?.elements.find((element) => element.id === selectedElementIds[0]);
}