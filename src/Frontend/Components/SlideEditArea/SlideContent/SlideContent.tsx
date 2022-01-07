import React, {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";
import styles from './SlideContent.module.css';
import {AnchorType} from "../../../Components/DropdownList/DropdownList";

type SlideContentProps = {
    slide?: Slide
}



function SlideContent({
    slide
}: SlideContentProps): JSX.Element {

    

    return (
        <div
        // left Click = select element
        // left Click + cursore Muve = select element area
        // left Click(elementSelect = true)+ cursore Muve = muve element
        onClick={(e) => {
            if(e.shiftKey)
            {
                console.log("yes")
            }
            else 
            {
                console.log("no")
            }
            
        }}>
            <canvas 
            className={styles.convasContainer}
            >  
            </canvas>
            
        </div>
    )
}



export default SlideContent;