import React from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu/MainMenu";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Slide} from "../Model/Types/Slide";
import {AppDispatch, AppState} from "../Model/Store/AppStore";
import {connect} from "react-redux";
import {createNewSlide} from "../Model/Store/Actions/Presentation/createNewSlide";
import {undo} from "../Model/Store/Actions/History/undo";
import {redo} from "../Model/Store/Actions/History/redo";

function App(props: {slides: Slide[], createNewSlide: any, redo: any, undo: any}) {
    return (
        <div className="app">
            <MainMenu redo={props.redo} undo={props.undo}/>
            <div className="main-container">
                <Sidebar slides={props.slides} createNewSlide={props.createNewSlide}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        slides: state.present.presentation.slides
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        createNewSlide: () => dispatch(createNewSlide()),
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
