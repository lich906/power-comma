import React from "react";
import './CustomDropdownMenu.css';

type DropdownMenuItemProps = {
    title: string,
    handler: Function,
}

type DropdownMenuProps = {
    items: DropdownMenuItemProps[],
}

function CustomDropdownMenu(props: DropdownMenuProps) {
    let dropdownMenuItems: JSX.Element[] = [];

    for (let i = 0; i < props.items.length; i++) {
        dropdownMenuItems.push(<DropdownMenuItem title={props.items[i].title} handler={props.items[i].handler} />)
    }

    return (
        <span>
            {dropdownMenuItems}
        </span>
    )
}

function DropdownMenuItem(props: DropdownMenuItemProps) {
    return (
        <span className="dropdown-menu__item"
             onClick={() => {props.handler()}}
        >
            {props.title}
        </span>
    )
}

export default CustomDropdownMenu;
