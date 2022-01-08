import {appStore} from "../AppStore";

export function selectSelectedElementIds(): string[] {
    return appStore.getState().present.selectedElementIds;
}