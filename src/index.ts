export function str(element: number | boolean | string) {
    return element.toString();
}

export function int(element: number | boolean | string): number {
    switch(typeof element) {
        case "boolean": 
            return element ? 1 : 0;

        case "number": 
            return element | 0;

        default:
            if(!isNaN(Number(element)))
                return Number(element);
            else
                throw new Error(`ValueError: invalid literal for int(): '${element}'`);
    }
}

export function bool(element: string | boolean | number) {
    return Boolean(element);
}

export function print(value: any, end?: string): void {
    if(end === undefined)
        console.log(value);
    else
        console.log(value + end);
}

type func = (num: any) => any;
export function map(fn: func, arr: any[]): any[] {
    let result: any[] = [];

    for (const item of arr)
        result.push(fn(item))
    
    return result;
}

type predicate = (num: any) => boolean;
export function filter(fn: predicate, arr: any[]): any[] {
    let result: any[] = [];

    for (const item of arr)
        if(fn(item))
            result.push(item);

    return result;
}

