import {Presentation} from "../Model/Types/Presentation";
import {PRESENTATION_FILE_EXTENSION} from "../Model/Constants";
import {openFile} from "./openFile";

export function openPresentationJSON(): Promise<Presentation> {
    return new Promise((resolve, reject) => {
        openFile(PRESENTATION_FILE_EXTENSION)
            .then(file => {
                const reader = new FileReader();

                reader.addEventListener('loadend', (event: ProgressEvent<FileReader>) => {
                    if (event.target?.result) {
                        try {
                            const result = JSON.parse(event.target.result.toString());
                            resolve(result);
                        } catch (e) {
                            reject('Invalid presentation format');
                        }
                    }
                });

                reader.readAsText(file, 'UTF-8');
            });
    });
}