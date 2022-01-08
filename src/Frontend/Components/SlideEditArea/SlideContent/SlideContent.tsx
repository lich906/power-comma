import React, {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";
import styles from './SlideContent.module.css';
import {AnchorType} from "../../../../Model/Types/ExtraTypes";

type SlideContentProps = {
    slide?: Slide
}

function SlideContent({
    slide
}: SlideContentProps): JSX.Element {
    console.log(slide?.elements.length);
    return (
        <canvas
            id = "canvas" 
            className={styles.convasContainer}> 

            {slide?.elements.map((item, i) => SlideDrawItem(i))} 
        </canvas>
        
    )
}

function SlideDrawItem(i: number) {
    
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    ctx!.fillStyle = 'rgba(3,169,244,1)';
    ctx!.fillRect(i*10, i*10+30, 2, 5);
}

export default SlideContent;