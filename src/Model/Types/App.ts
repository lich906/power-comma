import {Editor} from "./Editor";

export type App = {
    past: Editor[],
    present: Editor,
    future: Editor[]
}