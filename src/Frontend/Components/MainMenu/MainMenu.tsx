import React, {useState} from "react";
import './MainMenu.css';
import {FileDropdownMenu, EditDropdownMenu, SettingsDropdownMenu} from "../DropdownMenu/DropdownMenu";

function MainMenu() {
    return (
        <div className="top-main-menu">
            <FileButton/>
            <EditButton/>
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
                <FileDropdownMenu />
            </span>
        )
    }
}

function EditButton() {
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
                <EditDropdownMenu />
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
                <SettingsDropdownMenu />
            </span>
        )
    }
}

export default MainMenu;
