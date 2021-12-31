import React, {useState} from "react";
import './Sidebar.css';
import {range} from "../../Utils/Range";
import {Slide} from "../../../Model/Types/Slide";
import {AppDispatch} from "../../../Model/Store/AppStore";

function Sidebar(props: {slides: Slide[], createNewSlide: any}) {
    const [selectedItemIndexes, setSelectedItemIndexes] = useState([1]);

    function SidebarItem(props: {slide: Slide, index: number}): JSX.Element {
        const {slide, index} = props;

        function handleSelection(e: any) {
            if (e.shiftKey) {
                setSelectedItemIndexes(selectedItemIds => range(selectedItemIds[0], index));
            } else {
                setSelectedItemIndexes([index]);
            }
        }

        function Slide(props: {slide: Slide, isSelected: boolean}): JSX.Element {
            const {slide, isSelected} = props;

            return (
                <div className={`sidebar__item ${isSelected ? "sidebar__item_selected" : ""}`} onClick={handleSelection}>
                    {slide.id}
                </div>
            )
        }

        return (
            <Slide slide={slide} isSelected={selectedItemIndexes.includes(index)}/>
        )
    }

    return (
        <div className="sidebar">
            {props.slides.map((slide, index) => <SidebarItem slide={slide} index={index}/>)}
            <button onClick={props.createNewSlide}>Add slide</button>
        </div>
    )
}

export default Sidebar;
