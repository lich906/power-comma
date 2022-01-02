import React from "react";
import './MainMenu.css';
import {AppDispatch} from "../../../Model/Store/AppStore";
import {redo} from "../../../Model/Store/Actions/History/redo";
import {undo} from "../../../Model/Store/Actions/History/undo";
import {connect} from "react-redux";

function MainMenu(props: {
    showDropdownList: Function,
    undo: any,
    redo: any
}): JSX.Element {
    const {showDropdownList, undo, redo} = props;
    const FileDropdownListContent = [
        {title: "New", hotkey: "Ctrl + Alt + N", handler: () => console.log("New")},
        {title: "Open", hotkey: "Ctrl + O", handler: () => console.log("Open")},
        {title: "Save", hotkey: "Ctrl + S", handler: () => console.log("Save")},
        {title: "Save As", hotkey: "Ctrl + Alt + S", handler: () => console.log("Save As")},
        {title: "Export As PDF", hotkey: "Ctrl + Alt + E", handler: () => console.log("Export As PDF")}
    ];
    const EditDropdownListContent = [
        {title: "Undo", hotkey: "Ctrl + Z", handler: undo},
        {title: "Redo", hotkey: "Ctrl + Y", handler: redo}
    ];
    const SettingsDropdownListContent = [
        {title: "Setting 1", hotkey: "Ctrl + 1", handler: () => console.log("Setting 1")},
        {title: "Setting 2", hotkey: "Ctrl + 2", handler: () => console.log("Setting 2")}
    ];

    return (
        <div className="top-main-menu">
            <span className="top-main-menu__item" onClick={() => showDropdownList(FileDropdownListContent, {x: 0, y: 33})}>File</span>
            <span className="top-main-menu__item" onClick={() => showDropdownList(EditDropdownListContent, {x: 30, y: 33})}>Edit</span>
            <span className="top-main-menu__item" onClick={() => showDropdownList(SettingsDropdownListContent, {x: 90, y: 33})}>Settings</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo())
    }
}

export default connect(undefined, mapDispatchToProps)(MainMenu)
