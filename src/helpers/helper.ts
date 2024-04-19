
export const isNull = <T,>(value: T | null): value is null => {
    return value === null;
}

export const isNullOrUndefined = <T,>(value?: T): value is undefined => {
    return value === null || value === undefined;
}
