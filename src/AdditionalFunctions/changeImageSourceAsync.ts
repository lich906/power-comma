import {openImageBase64} from "./openImageBase64";
import {appDispatch} from "../Model/Store/AppStore";
import {changeImageSource} from "../Model/Store/Actions/Elements/changeImageSource";

export async function changeImageSourceAsync(slideId: string, elementId: string): Promise<void> {
    const image = await openImageBase64();
    appDispatch(changeImageSource(slideId, elementId, image.src));
}