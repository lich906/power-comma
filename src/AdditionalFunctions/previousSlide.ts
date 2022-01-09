import {selectCurrentSlideId} from "../Model/Store/Selectors/selectCurrentSlideId";
import {selectSlides} from "../Model/Store/Selectors/selectSlides";
import {AppDispatch, AppState} from "../Model/Store/AppStore";
import {updateSlidesSelection} from "../Model/Store/Actions/Editor/updateSlidesSelection";
import {changeCurrentSlide} from "../Model/Store/Actions/Editor/changeCurrentSlide";

export function previousSlide(state: AppState, dispatch: AppDispatch): void {
    const currentSlideId = selectCurrentSlideId(state);
    if (currentSlideId) {
        const slides = selectSlides(state);
        const currentSlideIndex = slides.findIndex((slide) => slide.id === currentSlideId);
        if (currentSlideIndex > 0) {
            dispatch(updateSlidesSelection([slides[currentSlideIndex - 1].id]));
            dispatch(changeCurrentSlide(slides[currentSlideIndex - 1].id));
        }
    }
}