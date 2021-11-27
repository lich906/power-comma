import {Editor} from "./Editor";

export type AppState = {
    past: Editor|null,
    future: Editor|null,
    data: Editor
}