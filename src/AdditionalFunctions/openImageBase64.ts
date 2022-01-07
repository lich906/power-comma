import {openFile} from "./openFile";
import {IMAGE_FILE_EXTENSION} from "../Model/Constants";

export function openImageBase64(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        openFile(IMAGE_FILE_EXTENSION)
            .then(file => {
                const reader = new FileReader();

                reader.addEventListener('loadend', (event: ProgressEvent<FileReader>) => {
                    if (event.target?.result) {
                        const image = new Image();

                        image.addEventListener('load', () => {
                            resolve(image);
                        });
                        image.addEventListener('error', () => {
                            reject('Invalid image');
                        });

                        image.src = event.target.result.toString();
                    }
                });

                reader.readAsDataURL(file);
            });
    });
}