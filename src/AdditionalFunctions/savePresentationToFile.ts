import fs from "fs";
import {Editor} from "../Model/Types/Editor";

export function savePresentationToFile(editor: Editor, fileName: string = 'test'): void {
    if (!fs.existsSync('./data/')) {
        fs.mkdirSync('data')
    }

    fs.writeFileSync(`./data/${fileName}.pcp`, JSON.stringify(editor))
}
