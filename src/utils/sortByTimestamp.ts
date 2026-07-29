type SortDirection = 'asc' | 'desc'

export const sortByTimestamp = <T>(
  items: T[],
  getTimestamp: (item: T) => string | number | Date | null | undefined,
  direction: SortDirection = 'desc',
): T[] =>
  [...items].sort((a, b) => {
    const valueA = getTimestamp(a)
    const valueB = getTimestamp(b)
    const timestampA = valueA === null || valueA === undefined ? Number.NaN : new Date(valueA).getTime()
    const timestampB = valueB === null || valueB === undefined ? Number.NaN : new Date(valueB).getTime()

    if (Number.isNaN(timestampA)) return 1
    if (Number.isNaN(timestampB)) return -1

    return direction === 'asc' ? timestampA - timestampB : timestampB - timestampA
  })
