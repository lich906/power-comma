import {Common} from "./Common";

export type Picture = Common & {
    readonly h: number;
    readonly w: number;
    readonly src: string;
}
