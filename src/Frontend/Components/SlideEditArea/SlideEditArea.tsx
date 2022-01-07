import React, {useState} from "react";
import styles from './SlideEditArea.module.css';
import {Slide} from "../../../Model/Types/Slide";
import {AppDispatch, AppState} from "../../../Model/Store/AppStore";
import {connect} from "react-redux";
import SlideContent from "./SlideContent/SlideContent";
import {Presentation} from "../../../Model/Types/Presentation"
import {initialAnchor} from "../../Constants";
import DropdownList, {AnchorType} from "../../Components/DropdownList/DropdownList";
import {selectCurrentSlide} from "../../../Model/Store/Selectors/selectCurrentSlide";


type ActionMenuItemProps = {
    title: string;
    hotkey?: string | undefined;
    handler: () => void;
}

type SlideEditAreaProps = {
    showActionMenu: Function,
}

function SlideEditArea({
    showActionMenu,
}: SlideEditAreaProps): JSX.Element {

    const slide = selectCurrentSlide();
    const ActionMenuItemContent: ActionMenuItemProps[] = [
        {
            title: "Circle",
            hotkey: "",
            handler: () => console.log("Circle")
        },
        {
            title: "Picture",
            hotkey: "",
            handler: () => console.log("Picture")
        },
        {
            title: "Rectangle",
            hotkey: "",
            handler: () => console.log("Rectangle")
        },
        {
            title: "TextBox",
            hotkey: "",
            handler: () => console.log("TextBox")
        },
        {
            title: "Triangle",
            hotkey: "",
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
    //const rect = e.target.getBoundingClientRect()
    const x = e.pageX //-rect.left если кординаты внутри canvas
    const y = e.pageY //-rect.top 
    return {x, y};
  }

const mapStateToProps = (state: AppState) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditArea);