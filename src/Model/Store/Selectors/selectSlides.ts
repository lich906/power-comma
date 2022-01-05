import {appStore} from "../AppStore";
import {Slide} from "../../Types/Slide";

export function selectSlides(): Slide[] {
    return appStore.getState().present.presentation.slides;
}