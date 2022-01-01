import React, {useState} from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {Slide} from "../Model/Types/Slide";
import {AppDispatch, AppState} from "../Model/Store/AppStore";
import {connect} from "react-redux";
import {createNewSlide} from "../Model/Store/Actions/Presentation/createNewSlide";
import {undo} from "../Model/Store/Actions/History/undo";
import {redo} from "../Model/Store/Actions/History/redo";
import MainMenu from "./Components/MainMenu/MainMenu"
import DropdownList from "./Components/DropdownList/DropdownList";

function App(props: {slides: Slide[], createNewSlide: any, redo: any, undo: any}) {
    const [dropdownListContent, setDropdownListContent] = useState([]);
    const [displayDropdownList, setDisplayDropdownList] = useState(false);
    const [dropdownListAnchor, setDropdownListAnchor] = useState({x: undefined, y: undefined})

    return (
        <div className="app">
            <MainMenu
                setDropdownListContent={setDropdownListContent}
                setDropdownListAnchor={setDropdownListAnchor}
                setDisplayDropdownList={setDisplayDropdownList}
            />
            <div className="main-container">
                <Sidebar slides={props.slides} createNewSlide={props.createNewSlide}/>
            </div>
            {displayDropdownList ?
                <DropdownList
                    setDisplayDropdownList={setDisplayDropdownList}
                    items={dropdownListContent}
                    anchor={dropdownListAnchor}
                /> : ""}
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
