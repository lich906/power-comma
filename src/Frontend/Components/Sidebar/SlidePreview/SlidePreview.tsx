import React from "react";
import {Slide} from "../../../../Model/Types/Slide"
import './SlidePreview.css'

function SlidePreview(props: {slide: Slide, isSelected: boolean, onClickHandler: any}): JSX.Element {
    const {slide, isSelected} = props;

    return (
        <div className={`slide ${isSelected ? "selected" : ""}`} onClick={props.onClickHandler}>
            {slide.id}
        </div>
    )
}

export default SlidePreview;

export {}
