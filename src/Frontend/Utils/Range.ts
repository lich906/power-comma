export function range(a: number, b: number): number[] {
    let low, high: number;
    let res: number[] = [];
    if (a < b) {
        low = a;
        high = b;
    } else if (b < a) {
        low = b;
        high = a;
    } else {
        return [a];
    }
    for (let i = low; i <= high; i++) {
        res.push(i);
    }

    return res;
}