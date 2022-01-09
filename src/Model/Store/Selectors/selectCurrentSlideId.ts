import {AppState} from "../AppStore";

export function selectCurrentSlideId(state: AppState): string|null {
    return state.present.currentSlideId;
}