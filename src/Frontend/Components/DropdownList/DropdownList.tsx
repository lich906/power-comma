import React from "react";
import styles from './DropdownList.module.css';

export type DropdownMenuItemProps = {
    title: string,
    hotkey?: string,
    handler: () => void,
}

export type AnchorType = {
    x: number,
    y: number
}

type DropdownMenuProps = {
    content: DropdownMenuItemProps[],
    anchor: AnchorType,
    setDisplayDropdownList: React.Dispatch<boolean>
}

function DropdownList(props: DropdownMenuProps) {
    return (
        <div
            className={styles.dropdownList}
            style={{top: props.anchor.y, left: props.anchor.x}}
            onMouseLeave={() => props.setDisplayDropdownList(false)}
        >
            {props.content.map((item, i) => <DropdownMenuItem key={i} title={item.title} handler={item.handler} hotkey={item.hotkey}/>)}
        </div>
    )
}

function DropdownMenuItem(props: DropdownMenuItemProps) {
    return (
        <div className={styles.item}
             onClick={() => {props.handler()}}
        >
            <span className={styles.itemTitle}>{props.title}</span>
            {props.hotkey ? <span className={styles.hotkey}>{props.hotkey}</span> : ""}
        </div>
    )
}

export default DropdownList;
