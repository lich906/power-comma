import {Editor} from "./Editor";

export type App = {
    past: Editor|null,
    future: Editor|null,
    data: Editor
}