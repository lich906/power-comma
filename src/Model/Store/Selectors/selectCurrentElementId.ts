import {AppState} from "../AppStore";

export function selectCurrentElementId(state: AppState): string|undefined {
    return state.present.selectedElementIds.length > 0 ? state.present.selectedElementIds[0] : undefined;
}