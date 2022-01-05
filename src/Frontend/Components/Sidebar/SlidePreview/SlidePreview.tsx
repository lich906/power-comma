import React from "react";
import {Slide} from "../../../../Model/Types/Slide"
import styles from './SlidePreview.module.css'

type SlidePreviewProps = {
    slide: Slide,
    order: number,
    isSelected: boolean,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>,
    onContextMenu: React.MouseEventHandler<HTMLDivElement>
}

function SlidePreview({slide, order, isSelected, onClickHandler, onContextMenu}: SlidePreviewProps): JSX.Element {

    return (
        <div
            data-id={slide.id}
            className={`${styles.slide} ${isSelected ? styles.selected : ""}`}
            onClick={onClickHandler}
            onContextMenu={onContextMenu}
        >
            <span className={styles.order}>{order}</span>
            {slide.id}
        </div>
    )
}

export default SlidePreview;
