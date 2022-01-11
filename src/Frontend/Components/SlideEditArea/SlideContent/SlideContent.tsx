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
    getMousePosition: Function
}

type StrokeType = {
    strokeWidth: number,
    stroke: String
}

function SlideContent({
    slide,
    getMousePosition
}: SlideContentProps): JSX.Element {
    //console.log(slide?.elements.length);

    function getStrokeStyle(border: BorderType): StrokeType {
        if (border != null)
        {
            return {strokeWidth: border.width, stroke: border.color.hex};
        }
        return {strokeWidth: 0, stroke: " "};
    }

    function ElementTransformFrame(props:{height:number, width: number, x: number, y: number, displayElementSelection: boolean, elementId: string}): JSX.Element {
        const startPoint = {
            x: props.x,
            y: props.y
        }

        let isPressed = false;
        let delta = { 
            x: 0,
            y: 0
        };
        
        return (
            <g>
                <polyline
                    points={" " + startPoint.x + " " + startPoint.y + " " + 
                    startPoint.x + " " + (startPoint.y-props.height) + " " +
                        (startPoint.x+props.width) + " " + (startPoint.y-props.height) + " " +
                        (startPoint.x+props.width) + " " + (startPoint.y) + " " +
                        (startPoint.x) + " " + (startPoint.y) + " " }
                    stroke = {"#000"}
                    fill = {""}
                    fillOpacity={0}
                    strokeOpacity={80}
                    strokeWidth = {4}
                    className = {
                        `${!props.displayElementSelection ? styles.hidden : ""}`
                    }

                    onMouseDown={(e)=>{
                        isPressed = true; 
                        delta.x = e.pageX; 
                        delta.y = e.pageY
                    }}
                    onMouseUp={(e)=>{
                        isPressed = false;
                        delta.x = e.pageX-delta.x; 
                        delta.y = e.pageY-delta.y;
                        appStore.dispatch(dragElements(slide!.id, selectSelectedElementIds(appStore.getState()) ,{ x:(delta.x), y:(delta.y) }));
                        console.log(delta);
                    }}            
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
                            onClick={(e) => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection, props.item.id, e)}
                        />
                            
                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x) as number)} y={((props.item.position.y+props.item.size.height) as number)} displayElementSelection={displayElementSelection} elementId={props.item.id}/>
                    </g>
                )

            case elementType.circle:
                
                return(
                    <g>
                        <circle 
                            fill={(props.item.fill as Color).hex} 
                            id={props.item.id} 
                            r={props.item.size.width/2}  
                            y={props.item.position.y}
                            x={props.item.position.x}
                            stroke = {""+stroke.stroke}
                            strokeWidth = {0 + stroke.strokeWidth}
                            onClick={(e) => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection, props.item.id, e)}
                        />
                            
                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection} elementId={props.item.id}/>
                        
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
                            onClick={(e) => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection, props.item.id, e)}
                        />

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection} elementId={props.item.id}/>
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
                            onClick={(e) => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection, props.item.id, e)}
                        >
                            {(props.item as TextBox).content}
                        </text>

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x-props.item.size.width) as number)} y={(props.item.position.y as number)} displayElementSelection={displayElementSelection} elementId={props.item.id}/>
                    </g>
                )

            case elementType.picture:
                const pictureStyle = {
                    href: "url(" +(props.item as Picture).src + ")",
                    
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
                            onClick={(e) => props.elementSelectFunction(setDisplayElementSelection, displayElementSelection, props.item.id, e)}
                        />

                        <ElementTransformFrame height={props.item.size.height} width={props.item.size.width} x={((props.item.position.x) as number)} y={((props.item.position.y + props.item.size.width) as number)} displayElementSelection={displayElementSelection} elementId={props.item.id}/>
                    </g>
                )
                    
        }
        return(
            <g></g>
        );
        
        
    }

    function showElementSelection(setDisplayElementSelection:Function, displayElementSelection: boolean, elementId: string, e: React.MouseEvent) {
        
        if (e.shiftKey) {
            let selectedElementsId = selectSelectedElementIds(appStore.getState()) != undefined ? selectSelectedElementIds(appStore.getState()) : [];
            addSelectedElementId((selectedElementsId as string[]), elementId);
            updateElementsSelection(selectedElementsId);
            setDisplayElementSelection(!displayElementSelection);
        } else {
            setDisplayElementSelection(!displayElementSelection);
            updateElementsSelection([elementId]);
        } 
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


const mapStateToProps = (state: AppState) => {
    return {
        
    }
}

const mapDispatchToProps = {
    dragElements: dragElements,
    addSelectedElementId: addSelectedElementId,
    selectSelectedElementIds: selectSelectedElementIds,
    updateElementsSelection: updateElementsSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideContent);