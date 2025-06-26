

const unknown = (arg: unknown): string => {
    if ('value' in (arg as any) && typeof (arg as any).value === 'string') {
        return (arg as any).value
    }

    return '-'
}