import {Slide} from "../../../Model/Types/Slide"
import {AppState} from "../AppStore";
import {selectSlides} from "../../../Model/Store/Selectors/selectSlides";
import {selectCurrentSlideId} from "../../../Model/Store/Selectors/selectCurrentSlideId";

export function selectCurrentSlide(state: AppState): Slide|undefined {
    return selectSlides(state).find(slide => slide.id === selectCurrentSlideId(state));
}