import {appDispatch} from "../Model/Store/AppStore";
import {selectSelectedElementIds} from "../Model/Store/Selectors/selectSelectedElementIds";
import {updateElementsSelection} from "../Model/Store/Actions/Editor/updateElementsSelection";

export function addSelectedElementId(id: string): void {
    const selectedElementIds = selectSelectedElementIds();
    if (!selectedElementIds.includes(id)) {
        appDispatch(updateElementsSelection([...selectedElementIds, id]));
    }
}