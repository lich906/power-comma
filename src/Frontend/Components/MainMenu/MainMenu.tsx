import React from "react";
import styles from './MainMenu.module.css';
import {AppDispatch, AppState} from "../../../Model/Store/AppStore";
import {redo} from "../../../Model/Store/Actions/History/redo";
import {undo} from "../../../Model/Store/Actions/History/undo";
import {connect} from "react-redux";
import {AnyAction} from "redux";
import {StringInputPopupTexts} from "../StringInputPopup/StringInputPopup";
import {DropdownMenuItemProps} from "../DropdownList/DropdownList";
import {changePresentationTitle} from "../../../Model/Store/Actions/Presentation/changePresentationTitle";
import {
    createNewPresentationPopupTexts,
    renamePresentationPopupTexts,
    savePresentationPopupTexts
} from "../../Constants";
import {savePresentationJSON} from "../../../AdditionalFunctions/savePresentationJSON";
import {Presentation} from "../../../Model/Types/Presentation";
import {openPresentationAsync} from "../../../AdditionalFunctions/openPresentationAsync";
import {createNewPresentation} from "../../../Model/Store/Actions/Editor/createNewPresentation";

type MainMenuProps = {
    presentation: Presentation,
    showDropdownList: Function,
    showStringInputPopup: (texts: StringInputPopupTexts, onSubmitFn: (val: string) => void) => void,
    undo: () => AnyAction,
    redo: () => AnyAction,
    changePresentationTitle: (title: string) => AnyAction,
    createNewPresentation: (title: string) => AnyAction
}

function MainMenu({
    presentation,
    showDropdownList,
    showStringInputPopup,
    undo,
    redo,
    changePresentationTitle,
    createNewPresentation
}: MainMenuProps): JSX.Element {
    const FileDropdownListContent: DropdownMenuItemProps[] = [
        {
            title: "New",
            hotkey: "Ctrl + Alt + N",
            handler: () => showStringInputPopup(createNewPresentationPopupTexts, createNewPresentation)
        },
        {
            title: "Rename",
            hotkey: "Ctrl + Alt + R",
            handler: () => showStringInputPopup(renamePresentationPopupTexts, changePresentationTitle)
        },
        {
            title: "Open",
            hotkey: "Ctrl + O",
            handler: openPresentationAsync
        },
        {
            title: "Save",
            hotkey: "Ctrl + S",
            handler: () => showStringInputPopup(
                savePresentationPopupTexts,
                (fileName: string) => savePresentationJSON(presentation, fileName)
            )
        },
        {
            title: "Export As PDF",
            hotkey: "Ctrl + Alt + E",
            handler: () => console.log("Export As PDF")
        }
    ];
    const EditDropdownListContent: DropdownMenuItemProps[] = [
        {
            title: "Undo",
            hotkey: "Ctrl + Z",
            handler: undo
        },
        {
            title: "Redo",
            hotkey: "Ctrl + Y",
            handler: redo
        }
    ];
    const SettingsDropdownListContent: DropdownMenuItemProps[] = [
        {
            title: "Setting 1",
            hotkey: "Ctrl + 1",
            handler: () => console.log("Setting 1")
        },
        {
            title: "Setting 2",
            hotkey: "Ctrl + 2",
            handler: () => console.log("Setting 2")
        }
    ];

    return (
        <div className={styles.mainMenu}>
            <span className={styles.item}
                  onClick={() => showDropdownList(FileDropdownListContent, {x: 0, y: 33})}>File</span>
            <span className={styles.item}
                  onClick={() => showDropdownList(EditDropdownListContent, {x: 30, y: 33})}>Edit</span>
            <span className={styles.item}
                  onClick={() => showDropdownList(SettingsDropdownListContent, {x: 90, y: 33})}>Settings</span>
            <div className={styles.logo}>,</div>
        </div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        presentation: state.present.presentation
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo()),
        changePresentationTitle: (title: string) => dispatch(changePresentationTitle(title)),
        createNewPresentation: (title: string) => dispatch(createNewPresentation(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
