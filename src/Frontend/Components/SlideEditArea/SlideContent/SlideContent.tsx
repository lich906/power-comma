import React, {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";


type SlideContentProps = {
    slide?: Slide,
}


function SlideContent({
    slide: Slide
}: SlideContentProps): JSX.Element {
    return (
        // canvas
        <div>
            {Slide?.id}
        </div>
    )
}

export default SlideContent;