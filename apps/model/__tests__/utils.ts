export const shouldThrowWithCode = async (
    fn: Function,
    code: string,
    ...args: any
): Promise<void> => {
    try {
        await fn(...args)
        throw new Error("Should not be here")
    } catch (e) {
        expect((e as any).code).toEqual(code)
    }
}

export const containsField = (array: any[], field: string): boolean =>
    array.findIndex((obj) => obj.field === field) > -1
