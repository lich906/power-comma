import {connect} from "react-redux";
import styles from "./Toolbar.module.css";
import {addNewElement} from "../../../Model/Store/Actions/Slide/addNewElement";
import {AppState} from "../../../Model/Store/AppStore";
import {elementType} from "../../../Model/Types/Element";
import {useState} from "react";
import {selectCurrentElement} from "../../../Model/Store/Selectors/selectCurrentElement";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";
import {selectSelectedElementIds} from "../../../Model/Store/Selectors/selectSelectedElementIds";

type ToolbarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function Toolbar(props: ToolbarProps): JSX.Element {
    const [isBordered, setIsBordered] = useState(!!props.currentElement?.border);
    const [isFilled, setIsFilled] = useState(!!props.currentElement?.fill);
    let commonTools: JSX.Element = (<span className={styles.placeholder}>Select element</span>);
    let additionalTools: JSX.Element|undefined;

    if (props.currentElement) {
        commonTools = (
            <>
                <div className={styles.heading} style={!isBordered ? {textDecoration: "line-through"} : {}}>
                    Border
                    <input checked={isBordered} onChange={(event) => {
                        setIsBordered(event.target.checked);
                    }} type={"checkbox"}/>
                </div>
                { isBordered &&
                    <div className={styles.toolList}>
                        <div><label>Color</label><input type={"color"}/></div>
                        <div><label>Width</label><input type={"number"}/></div>
                    </div>
                }
                <div className={styles.heading} style={!isFilled ? {textDecoration: "line-through"} : {}}>
                    Fill
                    <input checked={isFilled} onChange={(event) => {
                        setIsFilled(event.target.checked);
                    }} type={"checkbox"}/>
                </div>
                { isFilled &&
                    <div className={styles.toolList}>
                        <div><label>Color</label><input type={"color"}/></div>
                    </div>
                }
            </>
        )

        switch (props.currentElement.type) {
            case elementType.picture:
                additionalTools = (
                    <>
                        <div className={styles.heading}>Picture</div>
                        <div className={styles.toolList}>
                            <div><label>Change Source</label></div>
                        </div>
                    </>
                );
                break;
            case elementType.textBox:
                additionalTools = (
                    <>
                        <div className={styles.heading}>Text</div>
                        <div className={styles.toolList}>
                            <div>
                                <label>Font</label>
                                <select>
                                    <option>Roboto</option>
                                    <option>Open Sans</option>
                                </select>
                            </div>
                            <div><label>Font size</label><input type={"number"}/></div>
                            <div><label>Font color</label><input type={"color"}/></div>
                        </div>
                    </>
                );
        }
    }

    if (props.currentSlideId) {
        const slideId = props.currentSlideId;
        return (
            <div className={styles.toolbar}>
                <div className={styles.heading}>Add element</div>
                <div className={styles.elementButtonsContainer}>
                    <div className={styles.addRect}
                         title={"Rectangle"}
                         onClick={() => props.addNewElement(slideId, elementType.rectangle)}/>
                    <div className={styles.addTriangle}
                         title={"Triangle"}
                         onClick={() => props.addNewElement(slideId, elementType.triangle)}/>
                    <div className={styles.addCircle}
                         title={"Circle"}
                         onClick={() => props.addNewElement(slideId, elementType.circle)}/>
                    <div className={styles.addPicture}
                         title={"Picture"}
                         onClick={() => props.addNewElement(slideId, elementType.picture)}/>
                    <div className={styles.addText}
                         title={"Text"}
                         onClick={() => props.addNewElement(slideId, elementType.textBox)}/>
                </div>
                {commonTools}
                {additionalTools}
            </div>
        )
    } else {
        return (
            <div className={styles.toolbar}>
                <span className={styles.placeholder}>Select slide</span>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    selectedElementIds: selectSelectedElementIds(state),
    currentSlideId: selectCurrentSlideId(state),
    currentElement: selectCurrentElement(state)
})

const mapDispatchToProps = {
    addNewElement: addNewElement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
