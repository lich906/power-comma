import {connect} from "react-redux";
import styles from "./Toolbar.module.css";
import {addNewElement} from "../../../Model/Store/Actions/Slide/addNewElement";
import {AppState} from "../../../Model/Store/AppStore";
import {elementType} from "../../../Model/Types/Element";
import {useState} from "react";
import {selectCurrentElement} from "../../../Model/Store/Selectors/selectCurrentElement";

type ToolbarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function Toolbar(props: ToolbarProps): JSX.Element {
    const [isBordered, setIsBordered] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    let commonTools: JSX.Element = (<span className={styles.placeholder}>Select element</span>);
    const currentElement = selectCurrentElement();

    if (currentElement) {
        setIsBordered(!!currentElement.border);
        setIsFilled(!!currentElement.fill);
        commonTools = (<>
            <div className={styles.heading}>Border</div>
            <div className={styles.borderTools}><input type={"color"}/><input type={"number"} style={{fontSize: "16px"}}/></div>
            <div className={styles.heading}>Fill</div>
        </>)
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
    selectedElementIds: state.present.selectedElementIds,
    currentSlideId: state.present.currentSlideId
})

const mapDispatchToProps = {
    addNewElement: addNewElement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
