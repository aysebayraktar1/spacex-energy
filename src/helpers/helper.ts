export const isNullOrUndefined = <T,>(value?: T): value is undefined => {
    return value === null || value === undefined;
}
