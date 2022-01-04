import {openPresentationJSON} from "./openPresentationJSON";
import {appStore} from "../Model/Store/AppStore";
import {openPresentation} from "../Model/Store/Actions/Editor/openPresentation";

export async function openPresentationAsync(): Promise<void> {
    const presentation = await openPresentationJSON();
    appStore.dispatch(openPresentation(presentation));
}