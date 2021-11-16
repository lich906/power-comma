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
    const [selectedItemIds, setSelectedItemIds] = useState([1]);

    function SidebarItem(props: SidebarItemProps) {

        function handleSelection(e: any) {
            let low, high: number;
            let range: number[] = [];
            if (e.shiftKey) {
                if (selectedItemIds[0] < props.id) {
                    low = selectedItemIds[0];
                    high = props.id;
                } else {
                    low = props.id;
                    high = selectedItemIds[0];
                }
                for (let i = low; i <= high; i++) {
                    range.push(i);
                }
                setSelectedItemIds(selectedItemIds => range);
            } else {
                setSelectedItemIds(selectedItemIds => [props.id]);
            }
        }

        if (props.selected) {
            return (
                <div className="sidebar__item sidebar__item_selected" onClick={handleSelection}>
                    {props.id}
                </div>
            )
        } else {
            return (
                <div className="sidebar__item" onClick={handleSelection}>
                    {props.id}
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
