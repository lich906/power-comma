import {AppState} from "../AppStore";

export function selectSelectedElementIds(state: AppState): string[] {
    return state.present.selectedElementIds;
}