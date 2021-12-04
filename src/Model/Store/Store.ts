import {createStore} from "redux";
import {appReducers} from "./Reducers/AppReducers";
import {getInitialAppState} from "./getInitialState";

export let appStore = createStore(appReducers, getInitialAppState);

export type AppState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch