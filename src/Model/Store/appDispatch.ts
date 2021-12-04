import {appStore} from "./Store";
import {AnyAction} from "redux";
import {update} from "./Actions/History/update";

function updateHistoryOnDispatch(): void {
    appStore.dispatch(update());
}

export const appDispatch = (action: AnyAction) => {
    updateHistoryOnDispatch();
    appStore.dispatch(action);
}
