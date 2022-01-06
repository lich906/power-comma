export function last(arr: any[]) {
    return arr[arr.length - 1];
}

export function pushImmutable(arr: any[], item: any): any[] {
    return [...arr, item]
}

export function popImmutable(arr: any[]): any[] {
    return arr.filter((_, i) => i !== arr.length - 1)
}

export function replaceAtIndexImmutable(arr: any[], index: number, item: any): any[] {
    if (index < 0 || index > arr.length - 1) return arr;
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)]
}