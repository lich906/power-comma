import {Presentation} from "./Presentation";

let editor = {};

export type Editor = {
    readonly presentation: Presentation;
    readonly selectedSlideIds: number[];
    readonly selectedElementIds: number[];
    readonly currentSlideId: number;
}

export function getEditor() {
    return editor;
}

export function setEditor(newEditor: Editor) {
    editor = newEditor;
}

export function getCurrentPresentation(editor: Editor): Presentation {
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
