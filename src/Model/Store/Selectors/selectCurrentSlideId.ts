import {appStore} from "../AppStore";

export function selectCurrentSlideId(): string|null {
    return appStore.getState().present.currentSlideId;
}