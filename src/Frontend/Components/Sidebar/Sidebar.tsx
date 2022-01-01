import React, {useState} from "react";
import './Sidebar.css';
import {range} from "../../Utils/Range";
import {Slide} from "../../../Model/Types/Slide";
import SlidePreview from "./SlidePreview/SlidePreview";

function Sidebar(props: {slides: Slide[], createNewSlide: any}): JSX.Element {
    const [selectedItemIndexes, setSelectedItemIndexes] = useState([0]);
    const [displayAddSlideButton, setDisplayAddSlideButton] = useState(false);

    function SidebarItem(props: {slide: Slide, index: number}): JSX.Element {
        const {slide, index} = props;

        function handleSelection(e: any) {
            if (e.shiftKey) {
                setSelectedItemIndexes(selectedItemIds => range(selectedItemIds[0], index));
            } else {
                setSelectedItemIndexes([index]);
            }
        }

        return (
            <SlidePreview slide={slide} isSelected={selectedItemIndexes.includes(index)} onClickHandler={handleSelection}/>
        )
    }

    return (
        <div className="sidebar">
            <div
                onMouseEnter={() => setDisplayAddSlideButton(true)}
                onMouseLeave={() => setDisplayAddSlideButton(false)}
                className="slides-container"
            >
                {props.slides.map((slide, index) => <SidebarItem key={slide.id} slide={slide} index={index}/>)}
                <div className={`add-slide ${!displayAddSlideButton ? "hidden" : ""}`} onClick={props.createNewSlide}>New slide</div>
            </div>
            <div className="additional-info">
                <span>Slides count: {props.slides.length}</span>
                <span>Selected: {selectedItemIndexes.length}</span>
            </div>
        </div>
    )
}

export default Sidebar;
