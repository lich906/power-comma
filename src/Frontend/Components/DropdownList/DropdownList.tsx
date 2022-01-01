import React from "react";
import './DropdownList.css';

type DropdownMenuItemProps = {
    title: string,
    hotkey?: string,
    handler: Function,
}

type DropdownMenuProps = {
    items: DropdownMenuItemProps[],
    anchor: {x?: number, y?: number},
    setDisplayDropdownList: React.Dispatch<any>
}

function DropdownList(props: DropdownMenuProps) {
    return (
        <div
            className="dropdown-list"
            style={{top: props.anchor.y, left: props.anchor.x}}
            onMouseLeave={() => props.setDisplayDropdownList(false)}
        >
            {props.items.map((item, i) => <DropdownMenuItem key={i} title={item.title} handler={item.handler} hotkey={item.hotkey}/>)}
        </div>
    )
}

function DropdownMenuItem(props: DropdownMenuItemProps) {
    return (
        <div className="dropdown-list__item"
             onClick={() => {props.handler()}}
        >
            <span className="dropdown-list__item-title">{props.title}</span>
            {props.hotkey ? <span className="dropdown-list__hotkey">{props.hotkey}</span> : ""}
        </div>
    )
}

export default DropdownList;
