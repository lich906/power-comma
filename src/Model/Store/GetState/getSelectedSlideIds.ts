import {appStore} from "../AppStore";

export function getSelectedSlideIds(): string[] {
    return appStore.getState().present.selectedSlideIds;
}