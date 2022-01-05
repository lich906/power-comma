import {appStore} from "../AppStore";
import {Presentation} from "../../Types/Presentation";

export function getPresentation(): Presentation {
    return appStore.getState().present.presentation
}