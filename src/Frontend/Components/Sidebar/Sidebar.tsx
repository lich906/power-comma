import React, {useState} from "react";
import './Sidebar.css';

type SidebarProps = {
    items: SidebarItemProps[]
}

type SidebarItemProps = {
    id: number,
    selected: boolean,
}

function Sidebar(props: SidebarProps) {
    const [selectedItemId, setSelectedItemId] = useState(0);

    function handleSelection(id: number) {
        setSelectedItemId(id);
    }

    function SidebarItem(props: SidebarItemProps) {

        if (props.selected) {
            return (
                <div className="sidebar__item sidebar__item_selected" onClick={() => handleSelection(props.id)}>
                    {props.id}
                </div>
            )
        } else {
            return (
                <div className="sidebar__item" onClick={() => handleSelection(props.id)}>
                    {props.id}
                </div>
            )
        }
    }

    let items: JSX.Element[] = [];
    for (let i = 0; i < props.items.length; i++) {
        let selected = props.items[i].selected || props.items[i].id === selectedItemId;
        items.push(<SidebarItem id={props.items[i].id} selected={selected}/>)
    }

    return (
        <div className="sidebar">
            {items}
        </div>
    )
}

export default Sidebar;
