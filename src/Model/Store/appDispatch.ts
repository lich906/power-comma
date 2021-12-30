import {appStore} from "./Store";
import {AnyAction} from "redux";
import {update} from "./Actions/History/update";

function updateHistoryOnDispatch(action: AnyAction): void {
    // TODO: сделать проверку на action, при котором необходимо обновить историю
    appStore.dispatch(update());
}

export const appDispatch = (action: AnyAction) => {
    // updateHistoryOnDispatch(action);
    appStore.dispatch(action);
}
