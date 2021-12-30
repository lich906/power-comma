import React from 'react';
import './App.css';
import './Model/Store/Store.ts'
import {Slide} from "./Model/Types/Slide";
import {AppDispatch, AppState} from "./Model/Store/Store";
import {createNewSlide} from "./Model/Store/Actions/Presentation/createNewSlide";
import {connect} from "react-redux";
import {deleteAllSlides} from "./Model/Store/Actions/Presentation/deleteAllSlides";
import {savePresentationToFile} from "./Model/Store/AdditionalFunctions/savePresentationToFile";

function SlideList(props: { slides: Slide[] }): JSX.Element {

  function Slide(props: {slide: Slide}): JSX.Element {
    return (
        <span>{props.slide.id} : {props.slide.title}</span>
    )
  }

  return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {props.slides.map((slide) => <Slide key={slide.id} slide={slide}/>)}
      </div>
  );
}

function App(props: any) {
  return (
      <>
        <button onClick={props.createNewSlide}>Add Slide</button>
        <button onClick={props.deleteAllSlides}>Delete All Slides</button>
        <button onClick={() => savePresentationToFile(props.editor)}>Save Presentation</button>
        <SlideList slides={props.slides}/>
      </>
  );
}

const mapStateToProps = (state: AppState) => {
    return {
        slides: state.data.presentation.slides,
        editor: state.data
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        createNewSlide: () => dispatch(createNewSlide()),
        deleteAllSlides: () => dispatch(deleteAllSlides())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
