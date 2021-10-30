import React from "react";
import './DropdownMenu.css';

type DropdownMenuItemType = {
    title: string,
    handler: Function,
}

function DropdownMenuItem(props: DropdownMenuItemType) {
    return (
        <span className="dropdown-menu__item"
             onClick={() => {props.handler()}}
        >
            {props.title}
        </span>
    )
}

function FileDropdownMenu() {
    return (
        <span>
            <DropdownMenuItem title="Open" handler={() => console.log('Open')}/>
            <DropdownMenuItem title="Save" handler={() => console.log('Save')}/>
            <DropdownMenuItem title="Save As" handler={() => console.log('Save As')}/>
            <DropdownMenuItem title="Export As PDF" handler={() => console.log('Export As PDF')}/>
        </span>
    )
}

function EditDropdownMenu() {
    return (
        <span>
            <DropdownMenuItem title="Undo" handler={() => console.log('Undo')}/>
            <DropdownMenuItem title="Redo" handler={() => console.log('Redo')}/>
        </span>
    )
}

function SettingsDropdownMenu() {
    return (
        <span>
            <DropdownMenuItem title="Option 1" handler={() => console.log('Option 1')}/>
            <DropdownMenuItem title="Option 2" handler={() => console.log('Option 2')}/>
            <DropdownMenuItem title="Option 3" handler={() => console.log('Option 3')}/>
        </span>
    )
}

export default FileDropdownMenu;

export {
    EditDropdownMenu,
    FileDropdownMenu,
    SettingsDropdownMenu,
}
