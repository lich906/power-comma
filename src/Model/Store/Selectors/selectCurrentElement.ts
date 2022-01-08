import {Element} from "../../Types/Element";
import {selectCurrentSlide} from "./selectCurrentSlide";
import {selectSelectedElementIds} from "./selectSelectedElementIds";

export function selectCurrentElement(): Element|undefined {
    const selectedElementIds = selectSelectedElementIds();
    return selectCurrentSlide()?.elements.find((element) => element.id === selectedElementIds[0]);
}