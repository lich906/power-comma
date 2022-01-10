import {AppState} from "../AppStore";

export function selectSelectedSlideIds(state: AppState): string[] {
    return state.present.selectedSlideIds;
}