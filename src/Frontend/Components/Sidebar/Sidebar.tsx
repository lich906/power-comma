import React, {useState} from "react";
import './Sidebar.css';
import {range} from "../../Utils/Range";

type SidebarProps = {
    items: SidebarItemProps[]
}

type SidebarItemProps = {
    id: number,
    selected: boolean,
}

function Sidebar(props: SidebarProps) {
    const [selectedItemIds, setSelectedItemIds] = useState([1]);

    function SidebarItem(props: SidebarItemProps) {

        function handleSelection(e: any) {
            if (e.shiftKey) {
                setSelectedItemIds(selectedItemIds => range(selectedItemIds[0], props.id));
            } else {
                setSelectedItemIds(selectedItemIds => [props.id]);
            }
        }

        if (props.selected) {
            return (
                <div className="sidebar__item sidebar__item_selected" onClick={handleSelection}>
                </div>
            )
        } else {
            return (
                <div className="sidebar__item" onClick={handleSelection}>
                </div>
            )
        }
    }

    let items: JSX.Element[] = [];
    for (let i = 0; i < props.items.length; i++) {
        let selected = props.items[i].selected || selectedItemIds.includes(props.items[i].id);
        items.push(<SidebarItem id={props.items[i].id} selected={selected}/>)
    }

    return (
        <div className="sidebar">
            {items}
        </div>
    )
}

export default Sidebar;
