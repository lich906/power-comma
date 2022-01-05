import {AnyAction, createStore} from "redux";
import {EditorReducers} from "./Reducers/EditorReducers";
import {App} from "../Types/App";
import {UNDO} from "./Actions/History/undo";
import {REDO} from "./Actions/History/redo";
import {OPEN_PRESENTATION} from "./Actions/Editor/openPresentation";
import {isPresentationChangerAction} from "./Actions/isPresentationChangerAction";
import {CREATE_NEW_PRESENTATION} from "./Actions/Editor/createNewPresentation";
import {getInitialSlideState} from "./InitialStates";
import {Presentation} from "../Types/Presentation";

function enhance(reducer: typeof EditorReducers) {
    const initialAppState: App = {
        past: [],
        present: reducer(undefined, {type: ""}),
        future: []
    }

    return function (state: App = initialAppState, action: AnyAction): App {
        let {past, present, future} = state
        switch (action.type) {
            case UNDO:
                if (past.length > 0) {
                    future = future.concat([present]);
                    present = past[past.length - 1];
                    past = past.filter((_, i) => i !== (past.length - 1));
                } else {
                    return state;
                }
                return {
                    past: past,
                    future: future,
                    present: present
                };
            case REDO:
                if (future.length > 0) {
                    past = past.concat([present]);
                    present = future[future.length - 1];
                    future = future.filter((_, i) => i !== (future.length - 1));
                } else {
                    return state;
                }
                return {
                    past: past,
                    future: future,
                    present: present
                };
            case OPEN_PRESENTATION:
                const presentation = action.presentation;
                const firstSlideId: string|null = presentation.slides[0] ? presentation.slides[0].id : null;
                return  {
                    past: [],
                    present: {
                        presentation: presentation,
                        currentSlideId: firstSlideId,
                        selectedSlideIds: firstSlideId ? [firstSlideId]: [],
                        selectedElementIds: []
                    },
                    future: []
                }
            case CREATE_NEW_PRESENTATION:
                const newPresentation: Presentation = {
                    title: action.title,
                    slides: [getInitialSlideState()]
                };
                return {
                    future: [],
                    present: {
                        presentation: newPresentation,
                        currentSlideId: newPresentation.slides[0].id,
                        selectedSlideIds: [newPresentation.slides[0].id],
                        selectedElementIds: []
                    },
                    past: [],
                }
                default:
                const newPresent = reducer(present, action);
                if (isPresentationChangerAction(action)) {
                    return {
                        past: past.concat([present]),
                        present: newPresent,
                        future: []
                    };
                }
                return {...state, present: newPresent};
        }
    }
}

const appReducers = enhance(EditorReducers);

export let appStore = createStore(appReducers);

export const appDispatch = appStore.dispatch

export type AppState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch