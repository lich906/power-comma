import {selectCurrentSlideId} from "../Model/Store/Selectors/selectCurrentSlideId";
import {selectSlides} from "../Model/Store/Selectors/selectSlides";
import {appDispatch} from "../Model/Store/AppStore";
import {updateSlidesSelection} from "../Model/Store/Actions/Editor/updateSlidesSelection";
import {changeCurrentSlide} from "../Model/Store/Actions/Editor/changeCurrentSlide";

export function nextSlide(): void {
    const currentSlideId = selectCurrentSlideId();
    if (currentSlideId) {
        const slides = selectSlides();
        const currentSlideIndex = slides.findIndex((slide) => slide.id === currentSlideId);
        if (currentSlideIndex < slides.length - 1) {
            appDispatch(updateSlidesSelection([slides[currentSlideIndex + 1].id]));
            appDispatch(changeCurrentSlide(slides[currentSlideIndex + 1].id));
        }
    }
}