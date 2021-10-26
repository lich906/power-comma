import {Presentation} from "../Presentation";

const fs = require('fs');

function savePresentation(presentation: Presentation, fileName: string): void {
    if (!fs.existsSync('./data/')) {
        fs.mkdir('data')
    }

    fs.writeFile(`./data/${fileName}`, JSON.stringify(presentation), function (e: Error) {
        if (e) throw e;
        console.log('Failed to save presentation into a file');
    })
}

function renamePresentation(name: string, presentation: Presentation): Presentation {
    return {
        ...presentation,
        title: name,
    };
}

export {
    savePresentation,
    renamePresentation,
}