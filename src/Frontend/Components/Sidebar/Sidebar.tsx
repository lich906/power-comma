import React, {useState} from "react";
import './Sidebar.css';
import {range} from "../../Utils/Range";
import {Slide} from "../../../Model/Types/Slide";
import SlidePreview from "./SlidePreview/SlidePreview";
import {AppDispatch, AppState} from "../../../Model/Store/AppStore";
import {createNewSlide} from "../../../Model/Store/Actions/Presentation/createNewSlide";
import {connect} from "react-redux";
import {changeCurrentSlide} from "../../../Model/Store/Actions/Editor/changeCurrentSlide";
import {updateSlidesSelection} from "../../../Model/Store/Actions/Editor/updateSlidesSelection";
import {AnyAction} from "redux";
import {
    moveSelectedSlidesDown,
    moveSelectedSlidesUp
} from "../../../Model/Store/Actions/Presentation/moveSelectedSlides";
import {getSelectedSlideIds} from "../../../Model/Store/GetState/getSelectedSlideIds";

type SidebarProps = {
    slides: Slide[],
    selectedSlideIds: string[],
    createNewSlide: () => AnyAction,
    changeCurrentSlide: (id: string|null) => AnyAction,
    updateSlidesSelection: (ids: string[]) => AnyAction,
    moveSelectedSlidesUp: () => AnyAction,
    moveSelectedSlidesDown: () => AnyAction,
    showDropdownList: Function
}

function Sidebar({
    slides,
    selectedSlideIds,
    createNewSlide,
    changeCurrentSlide,
    updateSlidesSelection,
    moveSelectedSlidesUp,
    moveSelectedSlidesDown,
    showDropdownList
}: SidebarProps): JSX.Element {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [displayAddSlideButton, setDisplayAddSlideButton] = useState(false);

    function SidebarItem(props: {slide: Slide, index: number}): JSX.Element {
        const {slide, index} = props;

        function handleSelection(e: any): void {
            if (e.shiftKey) {
                const selectedSlideIds = slides.filter((_, i) => range(currentSlideIndex, index).includes(i)).map((slide) => slide.id);
                updateSlidesSelection(selectedSlideIds);
            } else {
                setCurrentSlideIndex(index);
                changeCurrentSlide(slide.id);
                updateSlidesSelection([slide.id]);
            }
        }

        return (
            <SlidePreview
                order={index + 1}
                slide={slide}
                isSelected={selectedSlideIds.includes(slide.id)}
                onClickHandler={handleSelection}
            />
        )
    }

    function showContextMenu(e: any) {
        e.preventDefault();
        showDropdownList([
            {
                title: "Move selected up",
                hotkey: "Ctrl+↑",
                handler: moveSelectedSlidesUp
            },
            {
                title: "Move selected down",
                hotkey: "Ctrl+↓",
                handler: moveSelectedSlidesDown
            }
        ], {x: e.clientX, y: e.clientY});
    }

    return (
        <div className="sidebar">
            <div
                onMouseEnter={() => setDisplayAddSlideButton(true)}
                onMouseLeave={() => setDisplayAddSlideButton(false)}
                className="slides-container"
                onContextMenu={showContextMenu}
            >
                {slides.map((slide, index) => <SidebarItem key={slide.id} slide={slide} index={index}/>)}
                <div className={`add-slide ${!displayAddSlideButton ? "hidden" : ""}`} onClick={createNewSlide}>New slide</div>
            </div>
            <div className="additional-info">
                <span>Slides count: {slides.length}</span>
                <span>Selected: {selectedSlideIds.length}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        slides: state.present.presentation.slides,
        selectedSlideIds: state.present.selectedSlideIds
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        createNewSlide: () => dispatch(createNewSlide()),
        changeCurrentSlide: (id: string|null) => dispatch(changeCurrentSlide(id)),
        updateSlidesSelection: (ids: string[]) => dispatch(updateSlidesSelection(ids)),
        moveSelectedSlidesUp: () => dispatch(moveSelectedSlidesUp(getSelectedSlideIds())),
        moveSelectedSlidesDown: () => dispatch(moveSelectedSlidesDown(getSelectedSlideIds())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
