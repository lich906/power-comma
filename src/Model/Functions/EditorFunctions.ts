import {Presentation} from "../Presentation";

var fs = require('fs');

function savePresentation(presentation: Presentation, fileName: string): void {
    if (!fs.existsSync('./data/')) {
        fs.mkdir('data')
    }
    fs.writeFile(`./data/${fileName}`, JSON.stringify(presentation), function (e: Error) {
        if (e) throw e;
        console.log('Failed to save presentation into a file');
    })
}

function openPresentation(fileName: string): Presentation {
    const data: string = fs.readFile(`./data/${fileName}`, 'utf8');

    return JSON.parse(data);
}

function renamePresentation(name: string, presentation: Presentation): Presentation {
    return {
        ...presentation,
        title: name,
    };
}

export {
    savePresentation,
    openPresentation,
    renamePresentation,
}