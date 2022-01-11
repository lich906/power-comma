import React, {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";
import styles from './SlideContent.module.css';
import { Element, elementType, Picture, TextBox, Triangle} from "../../../../Model/Types/Element";
import {AnchorType} from "../../../../Model/Types/ExtraTypes";
import {Color, BorderType} from "../../../../Model/Types/ExtraTypes";
import { type } from "os";
import { isNumber } from "util";

type SlideContentProps = {
    slide?: Slide
}

type StrokeType = {
    strokeWidth: number,
    stroke: String
}

function SlideContent({
    slide
}: SlideContentProps): JSX.Element {
    console.log(slide?.elements.length);

    function getStrokeStyle(border: BorderType): StrokeType {
        if (border != null)
        {
            return {strokeWidth: border.width, stroke: border.color.hex};
        }
        return {strokeWidth: 0, stroke: " "};
    }

    function SlideDrawItem(props:{index: number, item: Element}): JSX.Element {
        const stroke = getStrokeStyle(props.item.border as BorderType);
        switch (props.item.type) {
            case elementType.rectangle:
                return(
                    <g>
                        <title>{props.item.id}</title>
                        <rect 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}/>
                    </g>
                )

            case elementType.circle:
                return(
                    <g>
                        <title>{props.item.id}</title>
                        <circle 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            r={props.item.size.width/2}  
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}
                            />
                    </g>
                )

            case elementType.triangle:
                return(
                    <g>
                        <title>{props.item.id}</title>
                        <polygon
                            points={"" + props.item.position.x + " " + props.item.position.y + " " + 
                            (props.item as Triangle).position1.x + " " + (props.item as Triangle).position1.y + " " +
                            (props.item as Triangle).position2.x + " " + (props.item as Triangle).position2.y}
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}/>
                    </g>
                )

            case elementType.textBox:
                const textStyle = {
                    fontFamaly: (props.item as TextBox).fontFamily,
                    fontSize: (props.item as TextBox).fontSize,
                    fill:(props.item as TextBox).textColor.hex
                }
                return(
                    <g>
                        <title>{props.item.id}</title>
                        <text
                            id={props.item.id} 
                            style={textStyle}
                            y={props.item.position.y}
                            x={props.item.position.x}>
                            {(props.item as TextBox).content}
                        </text>
                    </g>
                )

            case elementType.picture:
                const pictureStyle = {
                    href: "url(" +(props.item as Picture).src + ")",
                    
                }
                return(
                    <g>
                        <title>{props.item.id}</title>
                        <image
                            id={props.item.id} 
                            href={pictureStyle.href}
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}/>
                    </g>
                )
                    
        }
        return(
            <g></g>
        );
        
        
    }


    return (
        <svg
            id = "elementContainer" 
            className = {styles.elementContainer}
            xmlns = {"http://www.w3.org/2000/svg"}
            > 
            
            {slide?.elements.map((item, index) => <SlideDrawItem key={item.id} index={index} item={item}/>)} 
        </svg>
        
    )
}

export default SlideContent;