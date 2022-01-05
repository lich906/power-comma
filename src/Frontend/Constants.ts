import {StringInputPopupTexts} from "./Components/StringInputPopup/StringInputPopup";
import {AnchorType} from "./Components/DropdownList/DropdownList";

export const initialStringInputPopupTexts: StringInputPopupTexts = {
    title: "",
    inputPlaceholder: "",
    submitBtnText: ""
}

export const initialAnchor: AnchorType = {
    x: 0,
    y: 0
}

export const renamePresentationPopupTexts: StringInputPopupTexts = {
    title: "Enter new presentation title",
    inputPlaceholder: "New title",
    submitBtnText: "Save"
};

export const savePresentationPopupTexts: StringInputPopupTexts = {
    title: "Enter presentation file name",
    inputPlaceholder: "File name",
    submitBtnText: "Save to file"
}

export const createNewPresentationPopupTexts: StringInputPopupTexts = {
    title: "Create new presentation",
    inputPlaceholder: "Presentation title",
    submitBtnText: "Create"
}