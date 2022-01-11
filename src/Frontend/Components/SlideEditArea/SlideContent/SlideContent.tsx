import React, {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";
import styles from './SlideContent.module.css';
import { Element, elementType, Picture, TextBox, Triangle} from "../../../../Model/Types/Element";
import {Color, BorderType, AnchorType} from "../../../../Model/Types/ExtraTypes";

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

    function ElementTransformFrame(props:{height:number, width: number, x: number, y: number, displayElementSelection: boolean}): JSX.Element {
        const startPoint = {
            x: props.x,
            y: props.y
        }
        return (
            <g>
                <polyline
                    points={" " + startPoint.x + " " + startPoint.y + " " + 
                    startPoint.x + " " + (startPoint.y-props.height) + " " +
                        (startPoint.x+props.width) + " " + (startPoint.y-props.height) + " " +
                        (startPoint.x+props.width) + " " + (startPoint.y) + " " +
                        (startPoint.x) + " " + (startPoint.y) + " " }
                    stroke = {"#123123"}
                    fillOpacity={0}
                    strokeOpacity={80}
                    strokeWidth = {8}
                    className = {
                        `${!props.displayElementSelection ? styles.hidden : ""}`
                    }
                                
                />
            </g>
        )
    }

    function SlideDrawItem(props:{index: number, item: Element, elementSelectFunction: Function}): JSX.Element {
        const stroke = getStrokeStyle(props.item.border as BorderType);
        const [displayElementSelection, setDisplayElementSelection] = useState(false);
        switch (props.item.type) {
            case elementType.rectangle:
                return(
                    <g
                        onClick={() => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection)}>
                        <rect 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}/>
                            
                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x) as number)} y={((props.item.position.y+props.item.size.height) as number)} displayElementSelection={displayElementSelection}/>
                    </g>
                )

            case elementType.circle:
                
                return(
                    <g
                        onClick={() => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection)}>

                        <circle 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            r={props.item.size.width/2}  
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}/>
                            
                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection}/>
                        
                    </g>
                )

            case elementType.triangle:
                return(
                    <g
                        onClick={() => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection)}>
                        <polygon
                            points={"" + props.item.position.x + " " + props.item.position.y + " " + 
                                (props.item as Triangle).position1.x + " " + (props.item as Triangle).position1.y + " " +
                                (props.item as Triangle).position2.x + " " + (props.item as Triangle).position2.y}
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}/>

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection}/>
                    </g>
                )

            case elementType.textBox:
                const textStyle = {
                    fontFamaly: (props.item as TextBox).fontFamily,
                    fontSize: (props.item as TextBox).fontSize,
                    fill:(props.item as TextBox).textColor.hex
                }
                return(
                    <g
                        onClick={() => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection)}>
                        <text
                            id={props.item.id} 
                            style={textStyle}
                            y={props.item.position.y}
                            x={props.item.position.x}>
                            {(props.item as TextBox).content}
                        </text>

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection}/>
                    </g>
                )

            case elementType.picture:
                const pictureStyle = {
                    href: "url(" +(props.item as Picture).src + ")",
                    
                }
                return(
                    <g
                        onClick={() => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection)}>
                        <image
                            id={props.item.id} 
                            href={pictureStyle.href}
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}/>

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x) as number)} y={((props.item.position.y + props.item.size.width) as number)} displayElementSelection={displayElementSelection}/>
                    </g>
                )
                    
        }
        return(
            <g></g>
        );
        
        
    }

    function showElementSelection(setDisplayElementSelection:Function, displayElementSelection: boolean) {
        console.log("select");
        setDisplayElementSelection(!displayElementSelection);
    }


    return (
        <svg
            id = "elementContainer" 
            className = {styles.elementContainer}
            xmlns = {"http://www.w3.org/2000/svg"}
            > 
            
            {slide?.elements.map((item, index) => <SlideDrawItem key={item.id} index={index} item={item} elementSelectFunction={showElementSelection}/>)} 
        </svg>
        
    )
}

export default SlideContent;