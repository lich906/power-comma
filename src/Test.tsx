import React from 'react';
import './App.css';
import './Model/Store/AppStore.ts'
import {Slide} from "./Model/Types/Slide";
import {AppDispatch, AppState} from "./Model/Store/AppStore";
import {createNewSlide} from "./Model/Store/Actions/Presentation/createNewSlide";
import {connect} from "react-redux";
import {deleteAllSlides} from "./Model/Store/Actions/Presentation/deleteAllSlides";
import {savePresentationToFile} from "./AdditionalFunctions/savePresentationToFile";
import {undo} from "./Model/Store/Actions/History/undo";
import {redo} from "./Model/Store/Actions/History/redo";

function SlideList(props: { slides: Slide[] }): JSX.Element {

  function Slide(props: {slide: Slide}): JSX.Element {
    const {slide} = props

    return (
        <span>{slide.id} : {slide.title}</span>
    )
  }

  return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.slides.map((slide) => <Slide key={slide.id} slide={slide}/>)}
      </div>
  );
}

function Test(props: any): JSX.Element {
  return (
      <>
        <button onClick={props.createNewSlide}>Add Slide</button>
        <button onClick={props.deleteAllSlides}>Delete All Slides</button>
        <button onClick={() => savePresentationToFile(props.editor)}>Save Presentation</button>
        <br/>
        <button onClick={props.undo}>Undo</button>
        <button onClick={props.redo}>Redo</button>
        <SlideList slides={props.slides}/>
      </>
  );
}

const mapStateToProps = (state: AppState) => {
    return {
        slides: state.present.presentation.slides,
        editor: state.present
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        createNewSlide: () => dispatch(createNewSlide()),
        deleteAllSlides: () => dispatch(deleteAllSlides()),
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
