import React from "react";
import './MainMenu.css';
import {AppDispatch} from "../../../Model/Store/AppStore";
import {redo} from "../../../Model/Store/Actions/History/redo";
import {undo} from "../../../Model/Store/Actions/History/undo";
import {connect} from "react-redux";

function MainMenu(props: {
    setDropdownListContent: React.Dispatch<any>,
    setDropdownListAnchor: React.Dispatch<any>,
    setDisplayDropdownList: React.Dispatch<any>,
    undo: any,
    redo: any
}): JSX.Element {
    const FileDropdownListContent = [
        {title: "New", hotkey: "Ctrl + N", handler: () => console.log("New")},
        {title: "Open", hotkey: "Ctrl + O", handler: () => console.log("Open")},
        {title: "Save", hotkey: "Ctrl + S", handler: () => console.log("Save")},
        {title: "Save As", hotkey: "Ctrl + Shift + S", handler: () => console.log("Save As")},
        {title: "Export As PDF", hotkey: "Ctrl + Shift + E", handler: () => console.log("Export As PDF")}
    ];
    const EditDropdownListContent = [
        {title: "Undo", hotkey: "Ctrl + Z", handler: props.undo},
        {title: "Redo", hotkey: "Ctrl + Y", handler: props.redo}
    ];
    const SettingsDropdownListContent = [
        {title: "Setting 1", hotkey: "Ctrl + 1", handler: () => console.log("Setting 1")},
        {title: "Setting 2", hotkey: "Ctrl + 2", handler: () => console.log("Setting 2")}
    ];

    const showFileMenu = (e: any) => {
        props.setDropdownListContent(FileDropdownListContent);
        props.setDropdownListAnchor({x: 0, y: 33});
        props.setDisplayDropdownList(true);
    }

    const showEditMenu = (e: any) => {
        props.setDropdownListContent(EditDropdownListContent);
        props.setDropdownListAnchor({x: 30, y: 33});
        props.setDisplayDropdownList(true);
    }

    const showSettingsMenu = (e: any) => {
        props.setDropdownListContent(SettingsDropdownListContent);
        props.setDropdownListAnchor({x: 90, y: 33});
        props.setDisplayDropdownList(true);
    }

    return (
        <div className="top-main-menu">
            <span className="top-main-menu__item" onClick={showFileMenu}>File</span>
            <span className="top-main-menu__item" onClick={showEditMenu}>Edit</span>
            <span className="top-main-menu__item" onClick={showSettingsMenu}>Settings</span>
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
