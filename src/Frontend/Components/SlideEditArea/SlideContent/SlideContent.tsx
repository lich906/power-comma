import {useState} from "react";
import {Slide} from "../../../../Model/Types/Slide";
import styles from './SlideContent.module.css';
import { Element, elementType, Picture, TextBox, Triangle} from "../../../../Model/Types/Element";
import {Color, BorderType, AnchorType} from "../../../../Model/Types/ExtraTypes";
import {AppState, appStore} from "../../../../Model/Store/AppStore";
import {connect} from "react-redux";
import {dragElements} from "../../../../Model/Store/Actions/Slide/dragElements";
import {addSelectedElementId} from "../../../../AdditionalFunctions/addSelectedElementId";
import {selectSelectedElementIds} from "../../../../Model/Store/Selectors/selectSelectedElementIds";
import {updateElementsSelection} from "../../../../Model/Store/Actions/Editor/updateElementsSelection";

type SlideContentProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
    slide?: Slide,
}

type StrokeType = {
    strokeWidth: number,
    stroke: String
}

function SlideContent({
    slide,
    state,
    selectedElementIds,
    dragElements,
    addSelectedElementId,
    selectSelectedElementIds,
    updateElementsSelection
}: SlideContentProps): JSX.Element {
    //console.log(slide?.elements.length);

    let isPressed = false;
    let isSomeElementSelected = false;
    let delta = { 
        x: 0,
        y: 0
    };

    function getStrokeStyle(border: BorderType): StrokeType {
        if (border != null)
        {
            return {strokeWidth: border.width, stroke: border.color.hex};
        }
        return {strokeWidth: 0, stroke: " "};
    }

    function ElementTransformFrame(props:{height:number, width: number, x: number, y: number, elementId: string, isSelected: boolean}): JSX.Element {
        const startPoint = {
            x: props.x,
            y: props.y 
        }

        let width = props.width;
        let height = props.height;

        return (
            <g>
                <polyline
                    points={" " + startPoint.x + " " + startPoint.y + " " + 
                    startPoint.x + " " + (startPoint.y-height) + " " +
                        (startPoint.x+width) + " " + (startPoint.y-height) + " " +
                        (startPoint.x+width) + " " + (startPoint.y) + " " +
                        (startPoint.x) + " " + (startPoint.y) + " " }
                    stroke = {"#000"}
                    fill = {""}
                    fillOpacity={0}
                    strokeOpacity={20}
                    strokeWidth = {4}
                    className = {
                        `${!props.isSelected ? styles.hidden : ""}`
                    }  
                    
                    onMouseDown={(e)=>{
                        isPressed = true; 
                        console.log(isPressed);
                        delta.x = e.pageX; 
                        delta.y = e.pageY
                    }}
                />
            </g>
        )
    }

    function SlideDrawItem(props:{index: number, item: Element, elementSelectFunction: Function}): JSX.Element {
        const stroke = getStrokeStyle(props.item.border as BorderType);
        
        switch (props.item.type) {
            case elementType.rectangle:
                return(
                    <g>
                        <rect 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}
                            onClick={(e) => props.elementSelectFunction(props.item.id, e)}
                        />
                            
                        <ElementTransformFrame 
                            isSelected={selectedElementIds.includes(props.item.id)}
                            height={props.item.size.height} 
                            width={props.item.size.width} 
                            x={((props.item.position.x) as number)} 
                            y={((props.item.position.y+props.item.size.height) as number)} 
                            elementId={props.item.id}/>
                    </g>
                )

            case elementType.circle:
                return(
                    <g>
                        <circle 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            r={(props.item.size.width/2)}  
                            cy={props.item.position.y}
                            cx={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}
                            onClick={(e) => props.elementSelectFunction(props.item.id, e)}
                        />
                            
                        <ElementTransformFrame 
                            isSelected={selectedElementIds.includes(props.item.id)}
                            height={props.item.size.height} 
                            width={props.item.size.width} 
                            x={((props.item.position.x-props.item.size.width/2) as number)} 
                            y={((props.item.position.y+props.item.size.height/2) as number)} 
                            elementId={props.item.id}/>
                        
                    </g>
                )

            case elementType.triangle:
                return(
                    <g>
                        <polygon
                            points={"" + props.item.position.x + " " + props.item.position.y + " " + 
                                (props.item as Triangle).position1.x + " " + (props.item as Triangle).position1.y + " " +
                                (props.item as Triangle).position2.x + " " + (props.item as Triangle).position2.y}
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}
                            onClick={(e) => props.elementSelectFunction(props.item.id, e)}
                        />

                        <ElementTransformFrame 
                            isSelected={selectedElementIds.includes(props.item.id)}
                            height={props.item.size.height/2} 
                            width={props.item.size.width/2} 
                            x={((props.item.position.x-props.item.size.width/2) as number)} 
                            y={(props.item.position.y as number)} 
                            elementId={props.item.id}/>
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
                        <text
                            id={props.item.id} 
                            style={textStyle}
                            y={props.item.position.y}
                            x={props.item.position.x}
                            onClick={(e) => props.elementSelectFunction(props.item.id, e)}
                        >
                            {(props.item as TextBox).content}
                        </text>

                        <ElementTransformFrame 
                            isSelected={selectedElementIds.includes(props.item.id)}
                            height={(props.item as TextBox).fontSize} 
                            width={((props.item as TextBox).fontSize * ((props.item as TextBox).content.length))} 
                            x={((props.item.position.x) as number)} y={(props.item.position.y as number)} 
                            elementId={props.item.id}/>
                    </g>
                )

            case elementType.picture:
                const pictureStyle = {
                    href: "src(" +(props.item as Picture).src + ")",
                }
                return(
                    <g>
                        <image
                            id={props.item.id} 
                            href={pictureStyle.href}
                            height={props.item.size.height} 
                            width={props.item.size.width}
                            y={props.item.position.y}
                            x={props.item.position.x}
                            onClick={(e) => props.elementSelectFunction(props.item.id, e)}

                        />

                        <ElementTransformFrame 
                            isSelected={selectedElementIds.includes(props.item.id)}
                            height={props.item.size.height} 
                            width={props.item.size.width} 
                            x={((props.item.position.x) as number)} 
                            y={((props.item.position.y + props.item.size.width) as number)} 
                            elementId={props.item.id}/>
                    </g>
                )
                    
        }
        return(
            <g></g>
        );
        
        
    }

    function showElementSelection(elementId: string, e: React.MouseEvent) {
        isSomeElementSelected = true;
        if (e.shiftKey) {
            if (selectedElementIds != undefined){
                addSelectedElementId(selectedElementIds, elementId);
                console.log("selected:" + selectedElementIds);
            }
        } else {
            console.log("selected< "+ selectedElementIds);
            updateElementsSelection([elementId]);
            console.log("selected> "+ selectedElementIds);
        } 
        
        dragElements(slide!.id, selectedElementIds ,{ x:(delta.x), y:(delta.y) });
    }


    return (
        <svg
            id = "elementContainer" 
            className = {styles.elementContainer}
            xmlns = {"http://www.w3.org/2000/svg"}

            onMouseUp={(e)=>{
                if (isPressed) {
                    isPressed = false;
                    delta.x = e.pageX-delta.x; 
                    delta.y = e.pageY-delta.y;
                    dragElements(slide!.id, selectedElementIds ,{ x:(delta.x), y:(delta.y) });
                    console.log(delta);
                    delta = {x:0, y:0};
                } 
            }}

            onMouseDown={(e)=>{
                if (!isPressed && !e.shiftKey && (selectedElementIds.length>1)) {
                    updateElementsSelection([]);
                    isSomeElementSelected = false;
                    console.log(delta);
                    delta = {x:0, y:0};
                } 
            }}
        >  
            {slide?.elements.map((item, index) => <SlideDrawItem 
                key={item.id} 
                index={index} 
                item={item} 
                elementSelectFunction={showElementSelection} 
            />)} 
        </svg>
        
    )
}


const mapStateToProps = (state: AppState) => {
    return {
        state: state,
        selectedElementIds: selectSelectedElementIds(state) == undefined ? [] : selectSelectedElementIds(state)
    }
}

const mapDispatchToProps = {
    dragElements: dragElements,
    addSelectedElementId: addSelectedElementId,
    selectSelectedElementIds: selectSelectedElementIds,
    updateElementsSelection: updateElementsSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContent);