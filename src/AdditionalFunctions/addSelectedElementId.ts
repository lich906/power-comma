import {appDispatch} from "../Model/Store/AppStore";
import {updateElementsSelection} from "../Model/Store/Actions/Editor/updateElementsSelection";

export function addSelectedElementId(selectedElementIds: string[], id: string): void {
    if (!selectedElementIds.includes(id)) {
        appDispatch(updateElementsSelection([...selectedElementIds, id]));
    }
}