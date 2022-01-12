import styles from './SlideEditArea.module.css';
import {AppState} from "../../../Model/Store/AppStore";
import {connect} from "react-redux";
import SlideContent from "./SlideContent/SlideContent";
import {AnchorType} from "../../../Model/Types/ExtraTypes";
import {selectCurrentSlide} from "../../../Model/Store/Selectors/selectCurrentSlide";
import {Color, MenuItemProps} from "../../../Model/Types/ExtraTypes";
import {BackgroundPicture} from "../../../Model/Types/ExtraTypes";
import {addNewElement} from "../../../Model/Store/Actions/Slide/addNewElement";




type SlideEditAreaProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {
    showActionMenu: Function
}

function SlideEditArea({
    state,
    showActionMenu,
    addNewElement,
}: SlideEditAreaProps): JSX.Element {
    const slide = selectCurrentSlide(state);
    const ActionMenuItemContent: MenuItemProps[] = [
        {
            title: "Circle",
            hotkey: "",
            handler: () => {
                console.log("Circle")
                addNewElement(slide!.id, 3 )
            }
        },
        {
            title: "Picture",
            hotkey: "",
            handler: () => {
                console.log("Picture")
                addNewElement(slide!.id, 4 )
            }
        },
        {
            title: "Rectangle",
            hotkey: "",
            handler: () => {
                console.log("Rectangle")
                addNewElement(slide!.id, 1 )
            }
        },
        {
            title: "TextBox",
            hotkey: "",
            handler: () => {
                console.log("TextBox")
                addNewElement(slide!.id, 0 )
            }
        },
        {
            title: "Triangle",
            hotkey: "",
            handler: () => {
                console.log("Triangle")
                addNewElement(slide!.id, 2 )
            }
        }
    ];

    

    const SlideStyle = {
        backgroundColor: (slide?.background as Color).hex,
        backgroundImage: 'url(' + (slide?.background as BackgroundPicture).src + ')',
    };


    return (
        <div className={styles.slide}
        // right Click = action menu
        style = {SlideStyle}
        
        >
            <SlideContent
                slide = {slide}
                showActionMenu = {showActionMenu}
                actionMenuItemContent = {ActionMenuItemContent}
                getMousePosition = {getMousePosition}
            />
        </div>
    );
}

function getMousePosition(e: any): AnchorType{
    //const rect = e.target.getBoundingClientRect()
    const x = e.pageX //-rect.left если кординаты внутри canvas
    const y = e.pageY //-rect.top 
    return {x, y};
  }

const mapStateToProps = (state: AppState) => {
    return {
        state: state,
    }
}

const mapDispatchToProps = {
    addNewElement: addNewElement,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideEditArea);