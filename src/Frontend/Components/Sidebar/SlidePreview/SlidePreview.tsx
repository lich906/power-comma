import React from "react";
import {Slide} from "../../../../Model/Types/Slide"
import styles from './SlidePreview.module.css'

type SlidePreviewProps = {
    slide: Slide,
    order: number,
    isSelected: boolean,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>
}

function SlidePreview({slide, order, isSelected, onClickHandler}: SlidePreviewProps): JSX.Element {

    return (
        <div className={`${styles.slide} ${isSelected ? styles.selected : ""}`} onClick={onClickHandler}>
            <span className={styles.order}>{order}</span>
            {slide.id}
        </div>
    )
}

export default SlidePreview;
