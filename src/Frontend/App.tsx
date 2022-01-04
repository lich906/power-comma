import React, {useCallback, useEffect, useState} from 'react';
import styles from './App.module.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {AppDispatch, AppState} from "../Model/Store/AppStore";
import {connect} from "react-redux";
import MainMenu from "./Components/MainMenu/MainMenu"
import DropdownList, {AnchorType} from "./Components/DropdownList/DropdownList";
import {undo} from "../Model/Store/Actions/History/undo";
import {redo} from "../Model/Store/Actions/History/redo";
import {AnyAction} from "redux";
import {moveSelectedSlidesDown, moveSelectedSlidesUp} from "../Model/Store/Actions/Presentation/moveSelectedSlides";
import {getSelectedSlideIds} from "../Model/Store/GetState/getSelectedSlideIds";
import StringInputPopup, {StringInputPopupTexts} from "./Components/StringInputPopup/StringInputPopup";
import {initialAnchor, initialStringInputPopupTexts} from "./Constants";
import {openPresentationAsync} from "../AdditionalFunctions/openPresentationAsync";

type AppProps = {
    currentSlideId: string|null,
    presentationTitle: string,
    undo: () => AnyAction,
    redo: () => AnyAction,
    moveSelectedSlidesUp: () => AnyAction,
    moveSelectedSlidesDown: () => AnyAction
}

function App({
    currentSlideId,
    presentationTitle,
    undo,
    redo,
    moveSelectedSlidesUp,
    moveSelectedSlidesDown
}: AppProps) {
    const [dropdownListContent, setDropdownListContent] = useState([]);
    const [displayDropdownList, setDisplayDropdownList] = useState(false);
    const [dropdownListAnchor, setDropdownListAnchor] = useState(initialAnchor)
    const [stringInputPopupTexts, setStringInputPopupTexts] = useState(initialStringInputPopupTexts);
    const [stringInputPopupOnSubmitFn, setStringInputPopupOnSubmitFn] = useState(() => (_: string) => {})
    const [displayStringInputPopup, setDisplayStringInputPopup] = useState(false);

    const handleKeyDown = useCallback((e: any): void => {
        if (e.ctrlKey && e.altKey) {
            switch (e.keyCode) {
                case 83:
                    e.preventDefault();
                    console.log('Ctrl+Alt+S');
                    break;
                case 69:
                    e.preventDefault();
                    console.log('Ctrl+Alt+E');
                    break;
                case 78:
                    e.preventDefault();
                    console.log('Ctrl+Alt+N');
                    break;
            }
        } else if (e.ctrlKey) {
            switch (e.keyCode) {
                case 90:
                    undo();
                    break;
                case 89:
                    redo();
                    break;
                case 79:
                    e.preventDefault();
                    console.log('Ctrl+O');
                    break;
                case 83:
                    e.preventDefault();
                    console.log('Ctrl+S');
                    break;
                case 49:
                    e.preventDefault();
                    console.log('Ctrl+1');
                    break;
                case 50:
                    e.preventDefault();
                    console.log('Ctrl+2');
                    break;
                case 38:
                    console.log('Ctrl+ArrowUp');
                    moveSelectedSlidesUp();
                    break;
                case 40:
                    console.log('Ctrl+ArrowDown');
                    moveSelectedSlidesDown();
                    break;
            }
        }
    }, [undo, redo, moveSelectedSlidesUp, moveSelectedSlidesDown]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    function showDropdownList(content: never[], anchor: AnchorType): void {
        setDropdownListContent(content);
        setDropdownListAnchor(anchor);
        setDisplayDropdownList(true);
    }

    function showStringInputPopup(texts: StringInputPopupTexts, onSubmitFn: (val: string) => void): void {
        setStringInputPopupTexts(texts);
        setStringInputPopupOnSubmitFn(() => onSubmitFn);
        setDisplayStringInputPopup(true);
    }

    return (
        <div className={styles.app}>
            <MainMenu
                showDropdownList={showDropdownList}
                showStringInputPopup={showStringInputPopup}
                openPresentationAsync={openPresentationAsync}
            />
            <div className={styles.mainContainer}>
                <Sidebar showDropdownList={showDropdownList}/>
                <div className={styles.editorContainer}>
                    <div className={styles.presentationTitle}>{presentationTitle}</div>
                    {currentSlideId}
                </div>
            </div>
            {
                displayDropdownList &&
                <DropdownList
                    setDisplayDropdownList={setDisplayDropdownList}
                    content={dropdownListContent}
                    anchor={dropdownListAnchor}
                />
            }
            {
                displayStringInputPopup &&
                <StringInputPopup
                    texts={stringInputPopupTexts}
                    onSubmit={stringInputPopupOnSubmitFn}
                    setDisplayStringInputPopup={setDisplayStringInputPopup}
                />
            }
        </div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        currentSlideId: state.present.currentSlideId,
        presentationTitle: state.present.presentation.title
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        undo: () => dispatch(undo()),
        redo: () => dispatch(redo()),
        moveSelectedSlidesUp: () => dispatch(moveSelectedSlidesUp(getSelectedSlideIds())),
        moveSelectedSlidesDown: () => dispatch(moveSelectedSlidesDown(getSelectedSlideIds()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
