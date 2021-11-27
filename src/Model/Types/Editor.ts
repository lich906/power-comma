import {Presentation} from "./Presentation";

let editor = {};

export type Editor = {
    readonly presentation: Presentation|null;
    readonly selectedSlideIds: number[];
    readonly selectedElementIds: number[];
    readonly currentSlideId: number|null;
}

export function getEditor() {
    return editor;
}

export function setEditor(newEditor: Editor) {
    editor = newEditor;
}

export function getCurrentPresentation(editor: Editor): Presentation|null {
    return editor.presentation
}

export function setCurrentPresentation(editor: Editor, presentation: Presentation): Editor {
    return {
        ...editor,
        presentation: presentation
    }
}

export function setSelectedSlideIds(editor: Editor, selectedSlideIds: number[]): Editor {
    return {
        ...editor,
        selectedSlideIds: selectedSlideIds
    }
}

export function setSelectedElementIds(editor: Editor, selectedElementIds: number[]): Editor {
    return {
        ...editor,
        selectedElementIds: selectedElementIds
    }
}
