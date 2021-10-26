import {Common} from "./Common";

type Picture = Common & {
    readonly h: number;
    readonly w: number;
    readonly src: string;
}

export type {
    Picture,
}