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

    function handleClick() {
        setShowDropdownMenu(!showDropdownMenu)
    }

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={handleClick}
            >
            File
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                  onClick={handleClick}
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

    function handleClick() {
        setShowDropdownMenu(!showDropdownMenu)
    }

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={handleClick}
            >
            Edit
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                      onClick={handleClick}
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

    function handleClick() {
        setShowDropdownMenu(!showDropdownMenu)
    }

    if (!showDropdownMenu) {
        return (
            <span className="top-main-menu__item"
                  onClick={handleClick}
            >
            Settings
        </span>
        )
    } else {
        return (
            <span className="button-and-dropdown-menu-wrapper">
                <span className="top-main-menu__item"
                      onClick={handleClick}
                >
                    Settings
                </span>
                <SettingsDropdownMenu />
            </span>
        )
    }
}

export default MainMenu;
