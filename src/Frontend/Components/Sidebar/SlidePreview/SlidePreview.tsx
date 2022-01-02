import React from "react";
import {Slide} from "../../../../Model/Types/Slide"
import './SlidePreview.css'

type SlidePreviewProps = {
    slide: Slide,
    order: number,
    isSelected: boolean,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>
}

function SlidePreview(props: SlidePreviewProps): JSX.Element {
    const {slide, order, isSelected, onClickHandler} = props;

    return (
        <div className={`slide ${isSelected ? "selected" : ""}`} onClick={onClickHandler}>
            <span className="order">{order}</span>
            {slide.id}
        </div>
    )
}

export default SlidePreview;
