export const UNDO_COMMAND = 'UNDO';

export function undo(): Object {
    return {
        type: UNDO_COMMAND
    }
}

export const REDO_COMMAND = 'REDO';

export function redo(): Object {
    return {
        type: REDO_COMMAND
    }
}
