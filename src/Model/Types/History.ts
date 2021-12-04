import {Editor} from "./Editor";

export type History = {
    past: Editor[]|null,
    future: Editor[]|null
}