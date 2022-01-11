export type Color = {
    readonly hex: string;
}

export type BackgroundPicture = {
    readonly src: string;
}

export type BorderType = {
    readonly width: number;
    readonly color: Color;
}

export type AnchorType = {
    x: number;
    y: number;
}

export type SizeType = {
    width: number;
    height: number;
}

export type MenuItemProps = {
    title: string;
    hotkey?: string | undefined;
    handler: () => void;
}