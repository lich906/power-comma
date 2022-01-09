import {undo} from "../Model/Store/Actions/History/undo";
import {moveSelectedSlidesDown, moveSelectedSlidesUp} from "../Model/Store/Actions/Presentation/moveSelectedSlides";
import {redo} from "../Model/Store/Actions/History/redo";
import {selectSelectedSlideIds} from "../Model/Store/Selectors/selectSelectedSlideIds";
import {AppDispatch, appStore} from "../Model/Store/AppStore";
import {openPresentationAsync} from "./openPresentationAsync";
import {
    createNewPresentationPopupTexts,
    renamePresentationPopupTexts,
    savePresentationPopupTexts
} from "../Frontend/Constants";
import {savePresentationJSON} from "./savePresentationJSON";
import {selectPresentation} from "../Model/Store/Selectors/selectPresentation";
import {changePresentationTitle} from "../Model/Store/Actions/Presentation/changePresentationTitle";
import {StringInputPopupTexts} from "../Frontend/Components/StringInputPopup/StringInputPopup";
import {createNewPresentation} from "../Model/Store/Actions/Editor/createNewPresentation";
import {nextSlide} from "./nextSlide";
import {previousSlide} from "./previousSlide";
import {deleteSlides} from "../Model/Store/Actions/Presentation/deleteSlides";

export function dispatchActionByHotkey(
    e: KeyboardEvent,
    showStringInputPopup: (texts: StringInputPopupTexts, onSubmitFn: (val: string) => void) => void,
    appDispatch: AppDispatch
): void {
    if (e.ctrlKey && e.altKey) {
        switch (e.keyCode) {
            case 69:
                e.preventDefault();
                console.log('Ctrl+Alt+E');
                break;
            case 78:
                e.preventDefault();
                console.log('Ctrl+Alt+N');
                showStringInputPopup(
                    createNewPresentationPopupTexts,
                    (title: string) => appDispatch(createNewPresentation(title))
                )
                break;
            case 82:
                console.log('Ctrl+Alt+R');
                showStringInputPopup(
                    renamePresentationPopupTexts,
                    (title: string) => appDispatch(changePresentationTitle(title))
                );
                break;
            case 38:
                console.log('Ctrl+Alt+ArrowUp');
                appDispatch(moveSelectedSlidesUp(selectSelectedSlideIds(appStore.getState())));
                break;
            case 40:
                console.log('Ctrl+Alt+ArrowDown');
                appDispatch(moveSelectedSlidesDown(selectSelectedSlideIds(appStore.getState())));
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
                    (fileName: string) => savePresentationJSON(selectPresentation(appStore.getState()), fileName)
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
                previousSlide(appStore.getState(), appDispatch);
                break;
            case 40:
                console.log('Ctrl+ArrowDown');
                nextSlide(appStore.getState(), appDispatch);
                break;
            case 46:
                console.log('Ctrl+Alt+Del');
                appDispatch(deleteSlides(selectSelectedSlideIds(appStore.getState())));
                break;
        }
    }
}