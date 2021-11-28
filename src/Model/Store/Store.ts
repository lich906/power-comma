import {createStore} from "redux";
import {appReducers} from "./Reducers/AppReducers";
import {getInitialState} from "./getInitialAppState";

export let appStore = createStore(appReducers, getInitialState);

export type RootState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch