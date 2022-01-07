import {connect} from "react-redux";
import styles from "./Toolbar.module.css";
import {addNewElement} from "../../../Model/Store/Actions/Slide/addNewElement";
import {AppState} from "../../../Model/Store/AppStore";
import {elementType} from "../../../Model/Types/Element";

type ToolbarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function Toolbar(props: ToolbarProps): JSX.Element {

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
            </div>
        )
    } else {
        return (
            <div className={styles.toolbar}/>
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
