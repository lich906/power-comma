import React, {useState} from "react";
import styles from './SlideEditArea.module.css';
import {Slide} from "../../../Model/Types/Slide";
import {AppDispatch, AppState} from "../../../Model/Store/AppStore";
import {connect} from "react-redux";
import SlideContent from "./SlideContent/SlideContent";
import {getSlideById} from "../../../AdditionalFunctions/getSlideById";
import {Presentation} from "../../../Model/Types/Presentation"
import {initialAnchor} from "../../Constants";
import DropdownList, {AnchorType} from "../../Components/DropdownList/DropdownList";

type SlideEditAreaProps = {
    currentSlideId: string|null,
    presentation: Presentation,
    showActionMenu: Function,
}

type ActionMenuItemProps = {
    title: string;
    hotkey?: string | undefined;
    handler: () => void;
}

function SlideEditArea({
    presentation, 
    currentSlideId,
    showActionMenu,
}: SlideEditAreaProps): JSX.Element {

    const slide = getSlideById(presentation, currentSlideId)
    const ActionMenuItemContent: ActionMenuItemProps[] = [
        {
            title: "Circle",
            hotkey: "Ctrl + C",
            handler: () => console.log("Circle")
        },
        {
            title: "Picture",
            hotkey: "Ctrl + p",
            handler: () => console.log("Picture")
        },
        {
            title: "Rectangle",
            hotkey: "Ctrl + R",
            handler: () => console.log("Rectangle")
        },
        {
            title: "TextBox",
            hotkey: "Ctrl + T",
            handler: () => console.log("TextBox")
        },
        {
            title: "Triangle",
            hotkey: "Ctrl + Alt + T",
            handler: () => console.log("Triangle")
        }
    ];

    return (
        <div className={styles.slide}
        // right Click = action menu
        onContextMenu={(e) => {
            e.preventDefault();
            showActionMenu(ActionMenuItemContent, mousePosition(e))
        }}
        
        >
            <SlideContent
                slide = {slide}
            />
        </div>
    );
}

function mousePosition(e: any): AnchorType{
    const rect = e.target.getBoundingClientRect()
    const x = e.pageX //-rect.left если кординаты внутри canvas
    const y = e.pageY //-rect.top 
    return {x, y};
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