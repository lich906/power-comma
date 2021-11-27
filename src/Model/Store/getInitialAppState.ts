import {Editor} from "../Types/Editor";
import {AppState} from "../Types/AppState";

function getInitialEditorState(): Editor {
    return {
        presentation: null,
        selectedSlideIds: [],
        selectedElementIds: [],
        currentSlideId: null
    }
}

export function getInitialAppState(): AppState {
    return {
        past: null,
        future: null,
        data: getInitialEditorState()
    }
}