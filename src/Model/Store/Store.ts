import {createStore} from "redux";
import {appReducers} from "./Reducers/AppReducers";

export let appStore = createStore(appReducers);

export type AppState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch