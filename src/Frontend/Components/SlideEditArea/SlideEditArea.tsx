import React, {useState} from "react";
import styles from './SlideEditArea.module.css';
import {Slide} from "../../../Model/Types/Slide";
import {AppDispatch, AppState} from "../../../Model/Store/AppStore";
import {connect} from "react-redux";
import SlideContent from "./SlideContent/SlideContent";
import {getSlideById ,Presentation} from "../../../Model/Types/Presentation";

type SlideEditAreaProps = {
    currentSlideId: string|null,
    presentation: Presentation
}

function SlideEditArea({
    presentation, 
    currentSlideId
}: SlideEditAreaProps): JSX.Element {
    const slide = getSlideById(presentation, currentSlideId)
    return (
        <div className={styles.slide}>
            <SlideContent
            />
        </div>
    );
}


const mapStateToProps = (state: AppState) => {
    return {
        presentation: state.present.presentation,
        currentSlideId: state.present.currentSlideId
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditArea);