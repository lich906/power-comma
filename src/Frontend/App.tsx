import React, {useCallback, useEffect, useState} from 'react';
import styles from './App.module.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {AppState} from "../Model/Store/AppStore";
import {connect} from "react-redux";
import MainMenu from "./Components/MainMenu/MainMenu"
import DropdownList, {AnchorType} from "./Components/DropdownList/DropdownList";
import StringInputPopup, {StringInputPopupTexts} from "./Components/StringInputPopup/StringInputPopup";
import {initialAnchor, initialStringInputPopupTexts} from "./Constants";
import {dispatchActionByHotkey} from "../AdditionalFunctions/dispatchActionByHotkey";
import SlideEditArea from "./Components/SlideEditArea/SlideEditArea"

type AppProps = {
    currentSlideId: string|null,
    presentationTitle: string
}

function App({currentSlideId, presentationTitle}: AppProps) {
    const [dropdownListContent, setDropdownListContent] = useState([]);
    const [displayDropdownList, setDisplayDropdownList] = useState(false);
    const [dropdownListAnchor, setDropdownListAnchor] = useState(initialAnchor)
    const [stringInputPopupTexts, setStringInputPopupTexts] = useState(initialStringInputPopupTexts);
    const [stringInputPopupOnSubmitFn, setStringInputPopupOnSubmitFn] = useState(() => (_: string) => {})
    const [displayStringInputPopup, setDisplayStringInputPopup] = useState(false);

    const handleKeyDown = useCallback((e: KeyboardEvent) => dispatchActionByHotkey(e, showStringInputPopup), []);

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
            />
            <div className={styles.mainContainer}>
                <Sidebar showDropdownList={showDropdownList}/>
                <div className={styles.editorContainer}>
                    <div className={styles.presentationTitle}>{presentationTitle}</div>
                    <SlideEditArea 
                    />
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

export default connect(mapStateToProps)(App);
