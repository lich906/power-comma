import {Presentation} from "../../Types/Presentation";

const fs = require('fs');

export function savePresentationToFile(presentation: Presentation, fileName: string): void {
    if (!fs.existsSync('./data/')) {
        fs.mkdir('data')
    }

    fs.writeFile(`./data/${fileName}`, JSON.stringify(presentation), function (e: Error) {
        if (e) throw e;
        console.log('Failed to save presentation into a file');
    })
}
