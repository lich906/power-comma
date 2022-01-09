import React, {useState} from "react";
import styles from './Sidebar.module.css';
import {range} from "../../Utils/Range";
import {Slide} from "../../../Model/Types/Slide";
import SlidePreview from "./SlidePreview/SlidePreview";
import {AppState} from "../../../Model/Store/AppStore";
import {createNewSlide} from "../../../Model/Store/Actions/Presentation/createNewSlide";
import {connect} from "react-redux";
import {changeCurrentSlide} from "../../../Model/Store/Actions/Editor/changeCurrentSlide";
import {updateSlidesSelection} from "../../../Model/Store/Actions/Editor/updateSlidesSelection";
import {
    moveSelectedSlidesDown,
    moveSelectedSlidesUp
} from "../../../Model/Store/Actions/Presentation/moveSelectedSlides";
import {deleteSlides} from "../../../Model/Store/Actions/Presentation/deleteSlides";
import {previousSlide} from "../../../AdditionalFunctions/previousSlide";
import {nextSlide} from "../../../AdditionalFunctions/nextSlide";
import {selectSelectedSlideIds} from "../../../Model/Store/Selectors/selectSelectedSlideIds";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";
import {selectSlides} from "../../../Model/Store/Selectors/selectSlides";

type SidebarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
    showDropdownList: Function
}

function Sidebar({
    slides,
    selectedSlideIds,
    currentSlideId,
    createNewSlide,
    changeCurrentSlide,
    updateSlidesSelection,
    moveSelectedSlidesUp,
    moveSelectedSlidesDown,
    deleteSlides,
    showDropdownList
}: SidebarProps): JSX.Element {
    const [displayAddSlideButton, setDisplayAddSlideButton] = useState(false);

    function SidebarItem(props: {slide: Slide, index: number, onContextMenu: React.MouseEventHandler}): JSX.Element {
        const {slide, index, onContextMenu} = props;

        function handleSelection(e: React.MouseEvent): void {
            if (e.shiftKey) {
                if (currentSlideId) {
                    const currentSlideIndex = slides.findIndex((slide) => slide.id === currentSlideId);
                    const selectedSlideIds = slides.filter((_, i) => range(currentSlideIndex, index).includes(i)).map((slide) => slide.id);
                    updateSlidesSelection(selectedSlideIds);
                }
            } else {
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
                onContextMenu={onContextMenu}
            />
        )
    }

    function showContextMenu(e: React.MouseEvent) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("data-id");
        showDropdownList([
            {
                title: "Previous slide",
                hotkey: "Ctrl + ↑",
                handler: previousSlide
            },
            {
                title: "Next slide",
                hotkey: "Ctrl + ↓",
                handler: nextSlide
            },
            {
                title: "Move selected up",
                hotkey: "Ctrl + Alt + ↑",
                handler: () => moveSelectedSlidesUp(selectedSlideIds)
            },
            {
                title: "Move selected down",
                hotkey: "Ctrl + Alt + ↓",
                handler: () => moveSelectedSlidesDown(selectedSlideIds)
            },
            {
                title: "Delete slide",
                handler: () => {if (id) deleteSlides([id])}
            },
            {
                title: "Delete selected slides",
                handler: () => deleteSlides(selectedSlideIds)
            }
        ], {x: e.clientX, y: e.clientY});
    }

    return (
        <div className={styles.sidebar}>
            <div
                onMouseEnter={() => setDisplayAddSlideButton(true)}
                onMouseLeave={() => setDisplayAddSlideButton(false)}
                className={styles.slidesContainer}
            >
                {slides.map((slide, index) => <SidebarItem key={slide.id} slide={slide} index={index} onContextMenu={showContextMenu}/>)}
                <div className={`${styles.addSlide} ${!displayAddSlideButton ? styles.hidden : ""}`} onClick={createNewSlide}>New slide</div>
            </div>
            <div className={styles.additionalInfo}>
                <span>Selected {selectedSlideIds.length} of {slides.length}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        slides: selectSlides(state),
        selectedSlideIds: selectSelectedSlideIds(state),
        currentSlideId: selectCurrentSlideId(state)
    }
}

const mapDispatchToProps = {
    createNewSlide: createNewSlide,
    changeCurrentSlide: changeCurrentSlide,
    updateSlidesSelection: updateSlidesSelection,
    moveSelectedSlidesUp: moveSelectedSlidesUp,
    moveSelectedSlidesDown: moveSelectedSlidesDown,
    deleteSlides: deleteSlides
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
