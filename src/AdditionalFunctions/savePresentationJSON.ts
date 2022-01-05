import {Presentation} from "../Model/Types/Presentation";
import {PRESENTATION_FILE_EXTENSION} from "../Model/Constants";

export function savePresentationJSON(presentation: Presentation, filename: string): void {
    const file = new Blob([JSON.stringify(presentation)], {
        type: 'text/plain',
    });
    const url = URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename + PRESENTATION_FILE_EXTENSION;

    link.click();
    URL.revokeObjectURL(url);
}