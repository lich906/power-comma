import {appStore} from "../AppStore";

export function selectSelectedSlideIds(): string[] {
    return appStore.getState().present.selectedSlideIds;
}