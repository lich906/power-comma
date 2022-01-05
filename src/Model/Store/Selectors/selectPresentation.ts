import {appStore} from "../AppStore";
import {Presentation} from "../../Types/Presentation";

export function selectPresentation(): Presentation {
    return appStore.getState().present.presentation
}