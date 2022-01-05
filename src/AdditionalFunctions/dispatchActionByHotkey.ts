import {undo} from "../Model/Store/Actions/History/undo";
import {moveSelectedSlidesDown, moveSelectedSlidesUp} from "../Model/Store/Actions/Presentation/moveSelectedSlides";
import {redo} from "../Model/Store/Actions/History/redo";
import {getSelectedSlideIds} from "../Model/Store/GetState/getSelectedSlideIds";
import {appDispatch} from "../Model/Store/AppStore";
import {openPresentationAsync} from "./openPresentationAsync";
import {renamePresentationPopupTexts, savePresentationPopupTexts} from "../Frontend/Constants";
import {savePresentationJSON} from "./savePresentationJSON";
import {getPresentation} from "../Model/Store/GetState/getPresentation";
import {changePresentationTitle} from "../Model/Store/Actions/Presentation/changePresentationTitle";
import {StringInputPopupTexts} from "../Frontend/Components/StringInputPopup/StringInputPopup";

export function dispatchActionByHotkey(
    e: KeyboardEvent,
    showStringInputPopup: (texts: StringInputPopupTexts, onSubmitFn: (val: string) => void) => void
): void {
    if (e.ctrlKey && e.altKey) {
        switch (e.keyCode) {
            case 83:
                e.preventDefault();
                console.log('Ctrl+Alt+S');
                break;
            case 69:
                e.preventDefault();
                console.log('Ctrl+Alt+E');
                break;
            case 78:
                e.preventDefault();
                console.log('Ctrl+Alt+N');
                break;
            case 82:
                console.log('Ctrl+Alt+R');
                showStringInputPopup(
                    renamePresentationPopupTexts,
                    (title: string) => appDispatch(changePresentationTitle(title))
                );
                break;
        }
    } else if (e.ctrlKey) {
        switch (e.keyCode) {
            case 90:
                console.log('Ctrl+Z');
                appDispatch(undo());
                break;
            case 89:
                console.log('Ctrl+Y');
                appDispatch(redo());
                break;
            case 79:
                e.preventDefault();
                console.log('Ctrl+O');
                openPresentationAsync();
                break;
            case 83:
                e.preventDefault();
                console.log('Ctrl+S');
                showStringInputPopup(
                    savePresentationPopupTexts,
                    (fileName: string) => savePresentationJSON(getPresentation(), fileName)
                );
                break;
            case 49:
                e.preventDefault();
                console.log('Ctrl+1');
                break;
            case 50:
                e.preventDefault();
                console.log('Ctrl+2');
                break;
            case 38:
                console.log('Ctrl+ArrowUp');
                appDispatch(moveSelectedSlidesUp(getSelectedSlideIds()));
                break;
            case 40:
                console.log('Ctrl+ArrowDown');
                appDispatch(moveSelectedSlidesDown(getSelectedSlideIds()));
                break;
        }
    }
}