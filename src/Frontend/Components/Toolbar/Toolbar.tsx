import {connect} from "react-redux";
import styles from "./Toolbar.module.css";
import {addNewElement} from "../../../Model/Store/Actions/Slide/addNewElement";
import {AppState} from "../../../Model/Store/AppStore";
import {elementType} from "../../../Model/Types/Element";
import {ChangeEvent, useState} from "react";
import {selectCurrentElement} from "../../../Model/Store/Selectors/selectCurrentElement";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";
import {selectSelectedElementIds} from "../../../Model/Store/Selectors/selectSelectedElementIds";
import {setBorderColor} from "../../../Model/Store/Actions/Elements/setBorderColor";
import {setBorderWidth} from "../../../Model/Store/Actions/Elements/setBorderWidth";
import {setFillColor} from "../../../Model/Store/Actions/Elements/setFillColor";
import {setFontFamily} from "../../../Model/Store/Actions/Elements/setFontFamily";
import {setFontSize} from "../../../Model/Store/Actions/Elements/setFontSize";
import {setTextBoxContent} from "../../../Model/Store/Actions/Elements/setTextboxContent";
import {setTextColor} from "../../../Model/Store/Actions/Elements/setTextColor";
import {disableBorder} from "../../../Model/Store/Actions/Elements/disableBorder";
import {disableFill} from "../../../Model/Store/Actions/Elements/disableFill";
import {selectCurrentElementId} from "../../../Model/Store/Selectors/selectCurrentElementId";
import {changeImageSource} from "../../../Model/Store/Actions/Elements/changeImageSource";
import {changeImageSourceAsync} from "../../../AdditionalFunctions/changeImageSourceAsync";

type ToolbarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function Toolbar(props: ToolbarProps): JSX.Element {
    const [isBordered, setIsBordered] = useState(!!props.currentElement?.border);
    const [isFilled, setIsFilled] = useState(!!props.currentElement?.fill);
    let commonTools: JSX.Element = (<span className={styles.placeholder}>Select element</span>);
    let additionalTools: JSX.Element|undefined;

    function updateBorderColor(event: ChangeEvent<HTMLInputElement>) {
        if (props.currentSlideId && props.currentElementId) {
            props.setBorderColor(props.currentSlideId, props.currentElementId, {hex: event.target.value});
        }
    }

    function updateBorderWidth(event: ChangeEvent<HTMLInputElement>) {
        if (props.currentSlideId && props.currentElementId) {
            props.setBorderWidth(props.currentSlideId, props.currentElementId, Number(event.target.value));
        }
    }

    function disableBorder() {
        if (props.currentSlideId && props.currentElementId) {
            props.disableBorder(props.currentSlideId, props.currentElementId);
        }
    }

    function disableFill() {
        if (props.currentSlideId && props.currentElementId) {
            props.disableFill(props.currentSlideId, props.currentElementId);
        }
    }

    function updateFillColor(event: ChangeEvent<HTMLInputElement>) {
        if (props.currentSlideId && props.currentElementId) {
            props.setFillColor(props.currentSlideId, props.currentElementId, {hex: event.target.value});
        }
    }

    function changeImageSource() {
        if (props.currentSlideId && props.currentElementId) {
            changeImageSourceAsync(props.currentSlideId, props.currentElementId);
        }
    }

    if (props.currentElement) {
        commonTools = (
            <>
                <div className={styles.heading} style={!isBordered ? {textDecoration: "line-through"} : {}}>
                    Border
                    <input checked={isBordered} onChange={(event) => {
                        setIsBordered(event.target.checked);
                        if (!event.target.checked) disableBorder();
                    }} type={"checkbox"}/>
                </div>
                { isBordered &&
                    <div className={styles.toolList}>
                        <div><label>Color</label><input type={"color"} onChange={updateBorderColor}/></div>
                        <div><label>Width</label><input type={"number"} onChange={updateBorderWidth}/></div>
                    </div>
                }
                <div className={styles.heading} style={!isFilled ? {textDecoration: "line-through"} : {}}>
                    Fill
                    <input checked={isFilled} onChange={(event) => {
                        setIsFilled(event.target.checked);
                        if (!event.target.checked) disableFill();
                    }} type={"checkbox"}/>
                </div>
                { isFilled &&
                    <div className={styles.toolList}>
                        <div><label>Color</label><input type={"color"} onChange={updateFillColor}/></div>
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
                            <div><label onClick={() => changeImageSource()}>Change Source</label></div>
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
    currentElement: selectCurrentElement(state),
    currentElementId: selectCurrentElementId(state)
})

const mapDispatchToProps = {
    addNewElement: addNewElement,
    setBorderColor: setBorderColor,
    setBorderWidth: setBorderWidth,
    setFillColor: setFillColor,
    setFontFamily: setFontFamily,
    setFontSize: setFontSize,
    changeImageSource: changeImageSource,
    setTextBoxContent: setTextBoxContent,
    setTextColor: setTextColor,
    disableBorder: disableBorder,
    disableFill: disableFill
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
