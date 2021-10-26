import {Presentation} from "../Presentation";
import {Editor} from "../Editor";

var fs = require('fs');

function openPresentation(fileName: string, editor: Editor): Editor {
    const data: string = fs.readFile(`./data/${fileName}`, 'utf8');
    const presentation: Presentation = JSON.parse(data);

    return {
        ...editor,
        presentation: presentation
    }
}

function openSlide(id: number, editor: Editor): Editor {
    return {
        ...editor,
        openSlide: id,
    }
}

export {
    openPresentation,
    openSlide,
}