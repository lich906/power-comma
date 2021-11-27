import {Presentation} from "../Presentation";
import {Editor} from "../Editor";

var fs = require('fs');

export function openPresentation(fileName: string, editor: Editor): Editor {
    const data: string = fs.readFile(`./data/${fileName}`, 'utf8');
    const presentation: Presentation = JSON.parse(data);

    return {
        ...editor,
        presentation: presentation
    }
}

export function openSlide(id: number, editor: Editor): Editor {
    return {
        ...editor,
        currentSlideId: id,
    }
}
