import {openPresentationJSON} from "./openPresentationJSON";
import {appDispatch} from "../Model/Store/AppStore";
import {openPresentation} from "../Model/Store/Actions/Editor/openPresentation";

export async function openPresentationAsync(): Promise<void> {
    const presentation = await openPresentationJSON();
    appDispatch(openPresentation(presentation));
}