import React, {useState} from "react";
import './Sidebar.css';

type SidebarProps = {
    items: SidebarItemProps[]
}

type SidebarItemProps = {
    id: number,
}

function Sidebar(props: SidebarProps) {

    function SidebarItem(props: SidebarItemProps) {
        const [selected, setSelected] = useState(false);

        if (selected) {
            return (
                <div className="sidebar__item sidebar__item_selected" onClick={() => setSelected(!selected)}>
                    {props.id}
                </div>
            )
        } else {
            return (
                <div className="sidebar__item" onClick={() => setSelected(!selected)}>
                    {props.id}
                </div>
            )
        }
    }

    let items: JSX.Element[] = [];

    for (let i = 0; i < props.items.length; i++) {
        items.push(<SidebarItem id={props.items[i].id}/>)
    }

    return (
        <div className="sidebar">
            {items}
        </div>
    )
}

export default Sidebar;
