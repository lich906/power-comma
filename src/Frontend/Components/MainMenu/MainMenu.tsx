import React, {useState} from "react";
import './MainMenu.css';
import CustomDropdownMenu from "./CustomDropdownMenu/CustomDropdownMenu";

function MainMenu(props: {undo: any, redo: any}) {
    return (
        <div className="top-main-menu">
            <FileButton/>
            <EditButton redoHandler={props.redo} undoHandler={props.undo}/>
            <SettingsButton/>
        </div>
    );
}

function FileButton() {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={() => setShowDropdownMenu(!showDropdownMenu)}
            >
            File
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                      onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                >
                    File
                </span>
                <CustomDropdownMenu items={
                    [
                        {
                            title: "New",
                            handler: () => console.log("New"),
                        },
                        {
                            title: "Open",
                            handler: () => console.log("Open"),
                        },
                        {
                            title: "Save",
                            handler: () => console.log("Save"),
                        },
                        {
                            title: "Save As",
                            handler: () => console.log("Save As"),
                        },
                        {
                            title: "Export As PDF",
                            handler: () => console.log("Export As PDF"),
                        }
                    ]} />
            </span>
        )
    }
}

function EditButton(props: {undoHandler: any, redoHandler: any}) {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={() => setShowDropdownMenu(!showDropdownMenu)}
            >
            Edit
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                      onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                >
                    Edit
                </span>
                <CustomDropdownMenu items={
                    [
                        {
                            title: "Undo",
                            handler: props.undoHandler,
                        },
                        {
                            title: "Redo",
                            handler: props.redoHandler,
                        }
                    ]} />
            </span>
        )
    }
}

function SettingsButton() {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={() => setShowDropdownMenu(!showDropdownMenu)}
            >
            Settings
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                      onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                >
                    Settings
                </span>
                <CustomDropdownMenu items={
                    [
                        {
                            title: "Setting 1",
                            handler: () => console.log("Setting 1"),
                        },
                        {
                            title: "Setting 2",
                            handler: () => console.log("Setting 2"),
                        }
                    ]
                } />
            </span>
        )
    }
}

export default MainMenu;
