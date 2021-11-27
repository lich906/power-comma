import {createStore} from "redux";
import {appReducers} from "./Reducers/AppReducers";
import {getInitialAppState} from "./getInitialAppState";

export let appStore = createStore(appReducers, getInitialAppState);

export type RootState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch